const { Pool } = require('pg');

async function inspectModules() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const res = await p.query('SELECT id, title, category, description FROM "Module"');
  console.log('=== All Modules in lms_edutech_db ===');
  for (const row of res.rows) {
    console.log(`[${row.id}]`);
    console.log(`  Title: ${row.title}`);
    console.log(`  Category: ${row.category}`);
    console.log(`  Description: ${row.description}`);
  }
  await p.end();
}
inspectModules();
