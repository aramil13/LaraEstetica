-- Metodos de pago del TPV: contado / tarjeta / mixto
ALTER TABLE invoices ADD COLUMN payment_method TEXT NOT NULL DEFAULT 'contado';
ALTER TABLE invoices ADD COLUMN payment_cash REAL NOT NULL DEFAULT 0;
ALTER TABLE invoices ADD COLUMN payment_card REAL NOT NULL DEFAULT 0;
