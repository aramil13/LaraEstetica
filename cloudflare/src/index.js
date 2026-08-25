const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-client-id, x-photo-id, x-file-name, x-photo-date, x-photo-type, x-notes, x-photo-hash',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function error(message, status = 400) {
  return json({ error: message }, status);
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function sha256Hex(text) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(buf =>
    Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
  );
}

function randomHex(bytes) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  return Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function authenticate(env, request) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token) return null;
  const row = await env.DB.prepare(
    'SELECT user_email, is_staff, staff_name, staff_salon_id FROM sessions WHERE token = ? AND expires_at > ?'
  ).bind(token, new Date().toISOString()).first();
  if (!row) return null;
  return { email: row.user_email, isStaff: !!row.is_staff, staffName: row.staff_name, staffSalonId: row.staff_salon_id };
}

const MIME_BY_EXT = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.webp': 'image/webp', '.bmp': 'image/bmp',
  '.svg': 'image/svg+xml', '.heic': 'image/heic', '.avif': 'image/avif',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: JSON_HEADERS });
    }

    /* ── Auth ─────────────────────────────── */
    if (path === '/api/health') return json({ ok: true });

    if (path === '/api/auth/setup' && method === 'POST') {
      const { email, password } = await readJson(request);
      if (!email || !password) return error('Email y contraseña requeridos');
      const existing = await env.DB.prepare('SELECT COUNT(*) AS n FROM users').first();
      if (existing.n > 0) return error('Ya existe un administrador', 409);
      if (password.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
      const salt = randomHex(16);
      const hash = await hashPassword(password, salt);
      await env.DB.prepare('INSERT INTO users (id, email, password_hash, salt) VALUES (?, ?, ?, ?)')
        .bind(randomHex(16), email.toLowerCase(), hash, salt).run();
      return json({ ok: true });
    }

    /* ── Gestión de administradores ───────── */
    if (path === '/api/auth/users' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT email, created_at FROM users ORDER BY email').all();
      return json(results);
    }
    if (path === '/api/auth/users' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      if (!b.email || !b.password) return error('Email y contraseña requeridos');
      if (b.password.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
      const exists = await env.DB.prepare('SELECT email FROM users WHERE email = ?').bind(b.email.toLowerCase()).first();
      if (exists) return error('Ya existe un administrador con ese email', 409);
      const salt = randomHex(16);
      const hash = await hashPassword(b.password, salt);
      await env.DB.prepare('INSERT INTO users (id, email, password_hash, salt) VALUES (?, ?, ?, ?)')
        .bind(randomHex(16), b.email.toLowerCase(), hash, salt).run();
      return json({ ok: true });
    }
    if (path.startsWith('/api/auth/users/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const target = decodeURIComponent(path.split('/')[4]).toLowerCase();
      if (target === email) return error('No puedes eliminar tu propia cuenta', 400);
      const row = await env.DB.prepare('SELECT email FROM users WHERE email = ?').bind(target).first();
      if (!row) return error('Administrador no encontrado', 404);
      await env.DB.prepare('DELETE FROM users WHERE email = ?').bind(target).run();
      await env.DB.prepare('DELETE FROM sessions WHERE user_email = ?').bind(target).run();
      return json({ ok: true });
    }

    /* ── Gestión de staff (solo admin, estanco por admin y salón) ─── */
    if (path === '/api/auth/staff' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT id, name, salon_id, admin_email FROM staff WHERE admin_email = ? ORDER BY name').bind(email).all();
      return json(results);
    }
    if (path === '/api/auth/staff' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      if (!b.name || !b.password) return error('Nombre y contraseña requeridos');
      if (b.password.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
      if (!b.salonId) return error('Debes elegir un salón');
      const salon = await env.DB.prepare('SELECT id, user_email FROM salons WHERE id = ?').bind(b.salonId).first();
      if (!salon || salon.user_email !== email) return error('El salón no pertenece a tu cuenta', 403);
      const existsName = await env.DB.prepare('SELECT name FROM staff WHERE name = ? AND admin_email = ?').bind(b.name.trim(), email).first();
      if (existsName) return error('Ya existe un usuario staff con ese nombre', 409);
      const existsSalon = await env.DB.prepare('SELECT id FROM staff WHERE salon_id = ?').bind(b.salonId).first();
      if (existsSalon) return error('Ese salón ya tiene un usuario staff', 409);
      const salt = randomHex(16);
      const hash = await hashPassword(b.password, salt);
      await env.DB.prepare('INSERT INTO staff (id, name, password_hash, salt, salon_id, admin_email) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(randomHex(16), b.name.trim(), hash, salt, b.salonId, email).run();
      return json({ ok: true });
    }
    if (path.startsWith('/api/auth/staff/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const name = decodeURIComponent(path.split('/')[4]);
      const row = await env.DB.prepare('SELECT id FROM staff WHERE name = ? AND admin_email = ?').bind(name, email).first();
      if (!row) return error('Usuario staff no encontrado', 404);
      await env.DB.prepare('DELETE FROM staff WHERE id = ?').bind(row.id).run();
      return json({ ok: true });
    }
    if (path.startsWith('/api/auth/staff/') && method === 'PUT') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const name = decodeURIComponent(path.split('/')[4]);
      const b = await readJson(request);
      const row = await env.DB.prepare('SELECT id, password_hash, salt FROM staff WHERE name = ? AND admin_email = ?').bind(name, email).first();
      if (!row) return error('Usuario staff no encontrado', 404);
      if (b.salonId) {
        const salon = await env.DB.prepare('SELECT id, user_email FROM salons WHERE id = ?').bind(b.salonId).first();
        if (!salon || salon.user_email !== email) return error('El salón no pertenece a tu cuenta', 403);
        const dupSalon = await env.DB.prepare('SELECT id FROM staff WHERE salon_id = ? AND id != ?').bind(b.salonId, row.id).first();
        if (dupSalon) return error('Ese salón ya tiene un usuario staff', 409);
      }
      const newName = (b.newName || name).trim();
      if (newName !== name) {
        const dupName = await env.DB.prepare('SELECT id FROM staff WHERE name = ? AND admin_email = ? AND id != ?').bind(newName, email, row.id).first();
        if (dupName) return error('Ya existe otro usuario staff con ese nombre', 409);
      }
      let newHash = row.password_hash;
      let newSalt = row.salt;
      if (b.password) {
        if (b.password.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
        newSalt = randomHex(16);
        newHash = await hashPassword(b.password, newSalt);
      }
      const newSalonId = b.salonId || (await env.DB.prepare('SELECT salon_id FROM staff WHERE id = ?').bind(row.id).first()).salon_id;
      await env.DB.prepare('UPDATE staff SET name = ?, password_hash = ?, salt = ?, salon_id = ? WHERE id = ?')
        .bind(newName, newHash, newSalt, newSalonId, row.id).run();
      return json({ ok: true });
    }

    if (path === '/api/auth/login' && method === 'POST') {
      const { email, password } = await readJson(request);
      if (!email || !password) return error('Email y contraseña requeridos');
      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email.toLowerCase()).first();
      if (!user) return error('Credenciales incorrectas', 401);
      const hash = await hashPassword(password, user.salt);
      if (hash !== user.password_hash) return error('Credenciales incorrectas', 401);
      const token = randomHex(32);
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
      await env.DB.prepare('INSERT INTO sessions (token, user_email, is_staff, staff_name, staff_salon_id, expires_at) VALUES (?, ?, 0, NULL, NULL, ?)')
        .bind(token, user.email, expires).run();
      return json({ token, email: user.email });
    }

    if (path === '/api/auth/staff-login' && method === 'POST') {
      const { name, password } = await readJson(request);
      if (!name || !password) return error('Nombre y contraseña requeridos');
      const { results } = await env.DB.prepare('SELECT * FROM staff WHERE name = ?').bind(name.trim()).all();
      let staff = null;
      for (const candidate of results) {
        const hash = await hashPassword(password, candidate.salt);
        if (hash === candidate.password_hash) { staff = candidate; break; }
      }
      if (!staff) return error('Nombre o contraseña incorrectos', 401);
      const token = randomHex(32);
      const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
      await env.DB.prepare('INSERT INTO sessions (token, user_email, is_staff, staff_name, staff_salon_id, expires_at) VALUES (?, ?, 1, ?, ?, ?)')
        .bind(token, staff.admin_email, staff.name, staff.salon_id, expires).run();
      return json({ token, email: staff.admin_email, staff: { name: staff.name, salonId: staff.salon_id } });
    }

    if (path === '/api/auth/logout' && method === 'POST') {
      const auth = request.headers.get('Authorization') || '';
      const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
      if (token) await env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run();
      return json({ ok: true });
    }

    if (path === '/api/auth/session' && method === 'GET') {
      const auth = await authenticate(env, request);
      if (!auth) return error('No autorizado', 401);
      return json({ email: auth.email, staff: auth.isStaff ? { name: auth.staffName, salonId: auth.staffSalonId } : null });
    }

    if (path === '/api/auth/profile' && method === 'GET') {
      const auth = await authenticate(env, request);
      if (!auth) return error('No autorizado', 401);
      const user = await env.DB.prepare('SELECT full_name, nif, fiscal_address FROM users WHERE email = ?').bind(auth.email).first();
      return json({ full_name: user ? user.full_name || null : null, nif: user ? user.nif || null : null, fiscal_address: user ? user.fiscal_address || null : null });
    }

    if (path === '/api/auth/profile' && method === 'PUT') {
      const auth = await authenticate(env, request);
      if (!auth) return error('No autorizado', 401);
      if (auth.isStaff) return error('No autorizado', 403);
      const b = await readJson(request);
      await env.DB.prepare('UPDATE users SET full_name = ?, nif = ?, fiscal_address = ? WHERE email = ?')
        .bind(b.full_name || null, b.nif || null, b.fiscal_address || null, auth.email).run();
      return json({ ok: true });
    }

    if (path === '/api/auth/change-password' && method === 'POST') {
      const auth = await authenticate(env, request);
      if (!auth) return error('No autorizado', 401);
      if (auth.isStaff) return error('No autorizado', 403);
      const { currentPassword, newPassword } = await readJson(request);
      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(auth.email).first();
      const hash = await hashPassword(currentPassword || '', user.salt);
      if (hash !== user.password_hash) return error('La contraseña actual no es correcta', 401);
      if (!newPassword || newPassword.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
      const salt = randomHex(16);
      const newHash = await hashPassword(newPassword, salt);
      await env.DB.prepare('UPDATE users SET password_hash = ?, salt = ? WHERE id = ?').bind(newHash, salt, user.id).run();
      return json({ ok: true });
    }

    if (path === '/api/auth/forgot' && method === 'POST') {
      const { email } = await readJson(request);
      if (!email) return error('Email requerido');
      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email.toLowerCase()).first();
      if (user) {
        const code = String(Math.floor(100000 + Math.random() * 900000));
        const codeHash = await sha256Hex(code);
        const expires = new Date(Date.now() + 30 * 60 * 1000).toISOString();
        await env.DB.prepare('INSERT INTO password_resets (id, email, code_hash, expires_at) VALUES (?, ?, ?, ?)')
          .bind(randomHex(16), user.email, codeHash, expires).run();
        try {
          const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: env.RESEND_FROM,
              to: user.email,
              subject: 'Restablecer tu contraseña - Nymara Estilistas',
              html: `
                <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;border:1px solid #eee;border-radius:12px;">
                  <h2 style="margin:0 0 8px;">Restablecer contraseña</h2>
                  <p style="color:#555;">Usa este código para restablecer la contraseña de tu cuenta. Es válido por 30 minutos.</p>
                  <p style="font-size:32px;font-weight:700;letter-spacing:6px;color:#8a5cf6;text-align:center;margin:24px 0;">${code}</p>
                  <p style="color:#999;font-size:12px;">Si no solicitaste este cambio, ignora este correo.</p>
                </div>`,
            }),
          });
          if (!res.ok) {
            const t = await res.text();
            console.error('Resend error', res.status, t);
          }
        } catch (e) {
          console.error('Resend exception', e);
        }
      }
      return json({ ok: true });
    }

    if (path === '/api/auth/reset' && method === 'POST') {
      const { email, code, newPassword } = await readJson(request);
      if (!email || !code || !newPassword) return error('Email, código y nueva contraseña requeridos');
      if (newPassword.length < 6) return error('La contraseña debe tener al menos 6 caracteres');
      const row = await env.DB.prepare(
        `SELECT * FROM password_resets
         WHERE email = ? AND used = 0 AND expires_at > ? ORDER BY created_at DESC LIMIT 1`
      ).bind(email.toLowerCase(), new Date().toISOString()).first();
      if (!row) return error('Código inválido o expirado', 401);
      const codeHash = await sha256Hex(code);
      if (codeHash !== row.code_hash) return error('Código inválido o expirado', 401);
      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email.toLowerCase()).first();
      if (!user) return error('Usuario no encontrado', 404);
      const salt = randomHex(16);
      const hash = await hashPassword(newPassword, salt);
      await env.DB.prepare('UPDATE users SET password_hash = ?, salt = ? WHERE id = ?').bind(hash, salt, user.id).run();
      await env.DB.prepare('UPDATE password_resets SET used = 1 WHERE id = ?').bind(row.id).run();
      await env.DB.prepare('DELETE FROM sessions WHERE user_email = ?').bind(user.email).run();
      return json({ ok: true });
    }

    /* ── Clientes ──────────────────────────── */
    if (path === '/api/clients' && method === 'GET') {
      const { email, isStaff, staffSalonId } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      let results;
      if (isStaff) {
        results = (await env.DB.prepare('SELECT * FROM clients WHERE user_email = ? AND salon_id = ? ORDER BY name').bind(email, staffSalonId).all()).results;
      } else {
        results = (await env.DB.prepare('SELECT * FROM clients WHERE user_email = ? ORDER BY name').bind(email).all()).results;
      }
      return json(results);
    }
    if (path === '/api/clients' && method === 'POST') {
      const { email, isStaff, staffSalonId } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      const id = b.id || randomHex(16);
      const salonId = isStaff ? staffSalonId : b.salon_id;
      if (!salonId) return error('Debes asignar un salón al cliente', 400);
      const enviar = b.enviar_was === true || b.enviar_was === 1 || b.enviar_was === 'true' ? 1 : 0;
      const technicalHistory = b.technical_history ? JSON.stringify(b.technical_history) : '{}';
      await env.DB.prepare(
        `INSERT INTO clients (id, name, phone, email, fiscal_address, nif, salon_id, enviar_was, whatsapp_template, observations, technical_history, user_email)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(id, b.name, b.phone || null, b.email || null, b.fiscal_address || null, b.nif || null, salonId, enviar, b.whatsapp_template || null, b.observations || null, technicalHistory, b.user_email || email).run();
      return json({ id, ...b, enviar_was: enviar === 1 });
    }
    if (path.startsWith('/api/clients/') && method === 'PUT') {
      const { email, isStaff, staffSalonId } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const b = await readJson(request);
      const salonId = isStaff ? staffSalonId : b.salon_id;
      if (!salonId) return error('Debes asignar un salón al cliente', 400);
      const enviar = b.enviar_was === true || b.enviar_was === 1 || b.enviar_was === 'true' ? 1 : 0;
      const technicalHistory = b.technical_history ? JSON.stringify(b.technical_history) : '{}';
      const r = await env.DB.prepare(
        `UPDATE clients SET name = ?, phone = ?, email = ?, fiscal_address = ?, nif = ?, salon_id = ?, enviar_was = ?, whatsapp_template = ?, observations = ?, technical_history = ? WHERE id = ? AND user_email = ?`
      ).bind(b.name, b.phone || null, b.email || null, b.fiscal_address || null, b.nif || null, salonId, enviar, b.whatsapp_template || null, b.observations || null, technicalHistory, id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }
    if (path.startsWith('/api/clients/') && method === 'DELETE') {
      const { email, isStaff, staffSalonId } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const r = await env.DB.prepare('DELETE FROM clients WHERE id = ? AND user_email = ? AND (? IS NULL OR salon_id = ?)').bind(id, email, isStaff ? staffSalonId : null, staffSalonId).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    /* ── Servicios ─────────────────────────── */
    if (path === '/api/services' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT * FROM services WHERE user_email = ? ORDER BY name').bind(email).all();
      return json(results);
    }
    if (path === '/api/services' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      const id = b.id || randomHex(16);
      await env.DB.prepare('INSERT INTO services (id, name, duration, price, user_email) VALUES (?, ?, ?, ?, ?)')
        .bind(id, b.name, b.duration || 0, b.price || 0, b.user_email || email).run();
      return json({ id, ...b });
    }
    if (path.startsWith('/api/services/') && method === 'PUT') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const b = await readJson(request);
      const r = await env.DB.prepare('UPDATE services SET name = ?, duration = ?, price = ? WHERE id = ? AND user_email = ?')
        .bind(b.name, b.duration || 0, b.price || 0, id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }
    if (path.startsWith('/api/services/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const r = await env.DB.prepare('DELETE FROM services WHERE id = ? AND user_email = ?').bind(id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    /* ── Salones ───────────────────────────── */
    if (path === '/api/salons' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT * FROM salons WHERE user_email = ? ORDER BY name').bind(email).all();
      return json(results);
    }
    if (path === '/api/salons' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      const id = b.id || randomHex(16);
      await env.DB.prepare('INSERT INTO salons (id, name, address, phone, email, business_name, nif, fiscal_address, user_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, b.name, b.address || null, b.phone || null, b.email || null, b.business_name || null, b.nif || null, b.fiscal_address || null, b.user_email || email).run();
      return json({ id, name: b.name, address: b.address || null, phone: b.phone || null, email: b.email || null, business_name: b.business_name || null, nif: b.nif || null, fiscal_address: b.fiscal_address || null, user_email: b.user_email || email });
    }
    if (path.startsWith('/api/salons/') && method === 'PUT') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const b = await readJson(request);
      const r = await env.DB.prepare('UPDATE salons SET name = ?, address = ?, phone = ?, email = ?, business_name = ?, nif = ?, fiscal_address = ? WHERE id = ? AND user_email = ?')
        .bind(b.name, b.address || null, b.phone || null, b.email || null, b.business_name || null, b.nif || null, b.fiscal_address || null, id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }
    if (path.startsWith('/api/salons/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const r = await env.DB.prepare('DELETE FROM salons WHERE id = ? AND user_email = ?').bind(id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    /* ── Citas ─────────────────────────────── */
    if (path === '/api/appointments' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT * FROM appointments WHERE user_email = ? ORDER BY date, time').bind(email).all();
      const rows = results.map(r => ({ ...r, appointment_photos: JSON.parse(r.appointment_photos || '[]') }));
      return json(rows);
    }
    if (path === '/api/appointments' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      const id = b.id || randomHex(16);
      await env.DB.prepare(
        `INSERT INTO appointments (id, client_id, service_id, salon_id, date, time, notes, user_email, appointment_photos, is_staff_appointment, whatsapp_sent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        id, b.client_id, b.service_id, b.salon_id || null, b.date, b.time, b.notes || '',
        b.user_email || email, JSON.stringify(b.appointment_photos || []),
        b.is_staff_appointment ? 1 : 0, b.whatsapp_sent ? 1 : 0
      ).run();
      return json({ id });
    }
    if (path.startsWith('/api/appointments/') && method === 'PUT') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const b = await readJson(request);
      const r = await env.DB.prepare(
        `UPDATE appointments SET client_id = ?, service_id = ?, salon_id = ?, date = ?, time = ?, notes = ?, appointment_photos = ? WHERE id = ? AND user_email = ?`
      ).bind(b.client_id, b.service_id, b.salon_id || null, b.date, b.time, b.notes || '', JSON.stringify(b.appointment_photos || []), id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }
    if (path.startsWith('/api/appointments/') && method === 'PATCH') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const parts = path.split('/');
      const id = parts[3];
      const sub = parts[4];
      if (sub === 'photos') {
        const b = await readJson(request);
        await env.DB.prepare('UPDATE appointments SET appointment_photos = ? WHERE id = ? AND user_email = ?')
          .bind(JSON.stringify(b.photos || []), id, email).run();
        return json({ ok: true });
      }
      if (sub === 'reminded') {
        await env.DB.prepare('UPDATE appointments SET whatsapp_sent_count = whatsapp_sent_count + 1 WHERE id = ? AND user_email = ?').bind(id, email).run();
        return json({ ok: true });
      }
      return error('Ruta no encontrada', 404);
    }
    if (path.startsWith('/api/appointments/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const r = await env.DB.prepare('DELETE FROM appointments WHERE id = ? AND user_email = ?').bind(id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    /* ── Facturación / TPV ─────────────────── */
    if (path === '/api/invoices' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const { results } = await env.DB.prepare('SELECT id, number, doc_type, client_id, client_name, client_nif, salon_id, items, base_amount, tax_amount, retention_amount, commission_rate, commission_amount, total_amount, payment_method, payment_cash, payment_card, created_at FROM invoices WHERE user_email = ? ORDER BY number DESC').bind(email).all();
      return json(results.map(r => ({ ...r, items: JSON.parse(r.items || '[]') })));
    }
    if (path === '/api/invoices' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const b = await readJson(request);
      if (!b.items || !Array.isArray(b.items) || b.items.length === 0) return error('La factura debe tener al menos un servicio');
      const validDocTypes = ['ticket', 'factura', 'factura-salon'];
      const docType = validDocTypes.includes(b.doc_type) ? b.doc_type : 'ticket';
      const isSalonInvoice = docType === 'factura-salon';
      const base = Number(b.base_amount) || 0;
      const commissionRate = isSalonInvoice ? (Number(b.commission_rate) || 30) : 0;
      const commission = isSalonInvoice ? (Number(b.commission_amount) || Math.round(base * commissionRate / 100 * 100) / 100) : 0;
      const taxable = isSalonInvoice ? commission : base;
      const tax = Number(b.tax_amount) || Math.round(taxable * 0.21 * 100) / 100;
      const retention = isSalonInvoice ? (Number(b.retention_amount) || Math.round(taxable * 0.15 * 100) / 100) : 0;
      const total = Number(b.total_amount) || Math.round((taxable + tax - retention) * 100) / 100;
      const isInvoice = docType !== 'ticket';
      const validPayMethods = ['contado', 'tarjeta', 'mixto'];
      const payMethod = validPayMethods.includes(b.payment_method) ? b.payment_method : 'contado';
      let payCash = Number(b.payment_cash) || 0;
      let payCard = Number(b.payment_card) || 0;
      if (payMethod === 'contado') { payCash = total; payCard = 0; }
      else if (payMethod === 'tarjeta') { payCash = 0; payCard = total; }
      else {
        payCash = Math.min(Math.max(payCash, 0), total);
        payCard = Math.round((total - payCash) * 100) / 100;
      }
      payCash = Math.round(payCash * 100) / 100;
      const last = await env.DB.prepare('SELECT MAX(number) AS maxNum FROM invoices WHERE user_email = ? AND doc_type IN (\'factura\', \'factura-salon\')').bind(email).first();
      const nextNumber = isInvoice ? ((last && last.maxNum ? last.maxNum : 0) + 1) : (await env.DB.prepare('SELECT MAX(number) AS maxNum FROM invoices WHERE user_email = ? AND doc_type = \'ticket\'').bind(email).first().then(r => (r && r.maxNum ? r.maxNum : 0) + 1));
      const id = randomHex(16);
      await env.DB.prepare(
        `INSERT INTO invoices (id, number, doc_type, client_id, client_name, client_nif, salon_id, items, base_amount, tax_amount, retention_amount, commission_rate, commission_amount, total_amount, payment_method, payment_cash, payment_card, user_email)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        id, nextNumber, docType, b.client_id || null, b.client_name || 'Consumidor final',
        b.client_nif || null, b.salon_id || null, JSON.stringify(b.items), base, tax, retention, commissionRate, commission, total, payMethod, payCash, payCard, email
      ).run();
      return json({ id, number: nextNumber, doc_type: docType });
    }
    if (path.startsWith('/api/invoices/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const r = await env.DB.prepare('DELETE FROM invoices WHERE id = ? AND user_email = ?').bind(id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    /* ── Fotos ─────────────────────────────── */
    // Servir imagen desde R2 (público para <img>)
    const photoServe = path.match(/^\/api\/photos\/([^/]+)\/(.+)$/);
    if (photoServe && method === 'GET') {
      const key = `${photoServe[1]}/${photoServe[2]}`;
      const obj = await env.PHOTOS.get(key);
      if (!obj) return error('No encontrado', 404);
      const ext = '.' + (key.split('.').pop() || '').toLowerCase();
      const headers = { 'Content-Type': MIME_BY_EXT[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' };
      if (obj.httpMetadata) headers['Content-Type'] = obj.httpMetadata.contentType || headers['Content-Type'];
      return new Response(obj.body, { headers });
    }

    if (path === '/api/photos' && method === 'GET') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const clientId = url.searchParams.get('clientId');
      let rows;
      if (clientId) {
        const r = await env.DB.prepare('SELECT * FROM client_photos WHERE client_id = ? AND user_email = ? ORDER BY created_at DESC').bind(clientId, email).all();
        rows = r.results;
      } else {
        const r = await env.DB.prepare('SELECT * FROM client_photos WHERE user_email = ? ORDER BY created_at DESC').bind(email).all();
        rows = r.results;
      }
      return json(rows);
    }

    if (path === '/api/photos/upload' && method === 'POST') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const clientId = request.headers.get('x-client-id');
      const photoId = request.headers.get('x-photo-id') || randomHex(16);
      const fileName = request.headers.get('x-file-name') || 'photo.jpg';
      const ext = '.' + (fileName.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/gi, '');
      const key = `${clientId}/${photoId}${ext}`;
      const arrayBuf = await request.arrayBuffer();
      const mime = MIME_BY_EXT[ext] || 'application/octet-stream';
      await env.PHOTOS.put(key, arrayBuf, { httpMetadata: { contentType: mime } });
      const origin = new URL(request.url).origin;
      const photoUrl = `${origin}/api/photos/${key}`;
      const record = {
        id: photoId,
        client_id: clientId,
        photo_url: photoUrl,
        photo_hash: request.headers.get('x-photo-hash') || null,
        photo_date: request.headers.get('x-photo-date') || null,
        photo_type: request.headers.get('x-photo-type') || 'before',
        notes: request.headers.get('x-notes') || null,
        user_email: email,
        created_at: new Date().toISOString(),
      };
      await env.DB.prepare(
        `INSERT INTO client_photos (id, client_id, photo_url, photo_hash, photo_date, photo_type, notes, user_email, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(record.id, record.client_id, record.photo_url, record.photo_hash, record.photo_date, record.photo_type, record.notes, record.user_email, record.created_at).run();
      return json(record);
    }

    if (path.startsWith('/api/photos/') && method === 'PUT') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const b = await readJson(request);
      const r = await env.DB.prepare('UPDATE client_photos SET photo_type = ?, photo_date = ?, notes = ? WHERE id = ? AND user_email = ?')
        .bind(b.photo_type || null, b.photo_date || null, b.notes || null, id, email).run();
      if (r.meta.changes === 0) return error('No autorizado', 403);
      return json({ ok: true });
    }

    if (path.startsWith('/api/photos/') && method === 'DELETE') {
      const { email } = await authenticate(env, request);
      if (!email) return error('No autorizado', 401);
      const id = path.split('/')[3];
      const row = await env.DB.prepare('SELECT * FROM client_photos WHERE id = ? AND user_email = ?').bind(id, email).first();
      if (row) {
        await env.DB.prepare('DELETE FROM client_photos WHERE id = ?').bind(id).run();
        const m = row.photo_url && row.photo_url.match(/\/api\/photos\/(.+)$/);
        if (m) await env.PHOTOS.delete(m[1]);
      } else {
        return error('No autorizado', 403);
      }
      return json({ ok: true });
    }

    return error('Ruta no encontrada', 404);
  },
};
