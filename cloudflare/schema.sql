CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_email TEXT NOT NULL,
  is_staff INTEGER DEFAULT 0,
  staff_name TEXT,
  staff_salon_id TEXT,
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS staff (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL,
  salon_id TEXT,
  admin_email TEXT,
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  UNIQUE(name, admin_email)
);
CREATE INDEX IF NOT EXISTS idx_staff_admin_email ON staff(admin_email);

CREATE TABLE IF NOT EXISTS password_resets (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  used INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);

CREATE TABLE IF NOT EXISTS clients (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  enviar_was INTEGER DEFAULT 0,
  whatsapp_template TEXT,
  observations TEXT,
  user_email TEXT DEFAULT '',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_clients_user_email ON clients(user_email);

CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  duration INTEGER,
  price REAL,
  user_email TEXT DEFAULT '',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_services_user_email ON services(user_email);

CREATE TABLE IF NOT EXISTS salons (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  user_email TEXT DEFAULT '',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_salons_user_email ON salons(user_email);

CREATE TABLE IF NOT EXISTS appointments (
  id TEXT PRIMARY KEY,
  client_id TEXT NOT NULL,
  service_id TEXT NOT NULL,
  salon_id TEXT,
  date TEXT,
  time TEXT,
  notes TEXT,
  user_email TEXT DEFAULT '',
  appointment_photos TEXT DEFAULT '[]',
  is_staff_appointment INTEGER DEFAULT 0,
  whatsapp_sent INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(date);

CREATE TABLE IF NOT EXISTS client_photos (
  id TEXT PRIMARY KEY,
  client_id TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  photo_hash TEXT,
  photo_date TEXT,
  photo_type TEXT,
  notes TEXT,
  user_email TEXT DEFAULT '',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_client_photos_client_id ON client_photos(client_id);

CREATE TABLE IF NOT EXISTS invoices (
  id TEXT PRIMARY KEY,
  number INTEGER NOT NULL,
  doc_type TEXT NOT NULL,
  client_id TEXT,
  client_name TEXT,
  client_nif TEXT,
  items TEXT NOT NULL,
  base_amount REAL NOT NULL,
  tax_amount REAL NOT NULL,
  retention_amount REAL NOT NULL DEFAULT 0,
  total_amount REAL NOT NULL,
  user_email TEXT DEFAULT '',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_invoices_user_email ON invoices(user_email);
