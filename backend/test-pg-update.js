const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

pool.query('UPDATE "User" SET specialty = \'Programming\' WHERE role = \'INSTRUCTOR\' RETURNING id, name, specialty')
  .then(res => console.log('DB Updated Users:', res.rows))
  .catch(err => console.error('DB Error:', err))
  .finally(() => pool.end());
