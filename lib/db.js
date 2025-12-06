import Database from 'better-sqlite3';

let db = null;

try {
  // In Vercel or other serverless environments, local filesystem is not persistent 
  // or writable in the same way. We check for a flag or just let it fail gracefully.
  // We'll intentionally skip DB creation if VERCEL env var is present to avoid errors.
  if (process.env.VERCEL) {
    console.log('Running in Vercel environment. Database disabled (Logging Mode).');
  } else {
    db = new Database('nextchair.db');

    // Initialize the database schema
    db.exec(`
        CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          role TEXT,
          area TEXT,
          phone TEXT NOT NULL,
          package TEXT,
          message TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
  }
} catch (error) {
  console.warn('Failed to initialize SQLite database. Switching to Logging Mode.', error.message);
  db = null;
}

export default db;
