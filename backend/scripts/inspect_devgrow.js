const { Pool } = require('pg');

async function inspectDevGrow() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const users = await p.query("SELECT * FROM \"User\" WHERE email IN ('bagus@lms.test', 'academy@devgrow.com')");
  console.log('DevGrow accounts:');
  console.table(users.rows.map(u => ({ id: u.id, name: u.name, email: u.email, role: u.role, createdAt: u.createdAt })));
  await p.end();
}
inspectDevGrow();
