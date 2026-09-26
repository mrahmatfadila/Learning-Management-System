const { Pool } = require('pg');

async function main() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const users = await p.query('SELECT id, name, email, role, "profilePicture" FROM "User" ORDER BY name ASC');
  console.log(JSON.stringify(users.rows, null, 2));
  await p.end();
}

main().catch(console.error);
