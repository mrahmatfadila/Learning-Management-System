import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
const r = await pool.query('SELECT id, title, category FROM "Module" ORDER BY title');
r.rows.forEach(row => console.log(row.id, '|', row.category, '|', row.title));
await pool.end();
