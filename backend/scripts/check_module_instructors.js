const { Pool } = require('pg');

async function checkInstructors() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const users = await p.query('SELECT id, name, email, role FROM "User"');
  console.log('=== USERS ===');
  console.table(users.rows);

  const mods = await p.query('SELECT m.id, m.title, m."instructorId", u.name as instructor_name, u.email as instructor_email FROM "Module" m LEFT JOIN "User" u ON m."instructorId" = u.id ORDER BY m.title');
  console.log('=== MODULES AND INSTRUCTORS ===');
  console.table(mods.rows);

  await p.end();
}
checkInstructors();
