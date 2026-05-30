const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

async function run() {
  try {
    const lessonsRes = await pool.query('SELECT id, title, "moduleId", type FROM "Lesson"');
    console.log('--- ALL LESSONS IN DB ---');
    console.log(lessonsRes.rows);
  } catch (err) {
    console.error('❌ Error querying lessons:', err);
  } finally {
    await pool.end();
  }
}

run();
