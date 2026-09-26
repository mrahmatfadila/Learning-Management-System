const { Pool } = require('pg');

async function check() {
  const p1 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  
  const m1 = await p1.query('SELECT id, title, category FROM "Module"');
  console.log('=== Modules in lms_content_db ===');
  console.table(m1.rows);
  
  const m2 = await p2.query('SELECT id, title, category FROM "Module"');
  console.log('=== Modules in lms_edutech_db ===');
  console.table(m2.rows);

  const les1 = await p1.query('SELECT "moduleId", count(*) FROM "Lesson" GROUP BY "moduleId"');
  console.log('=== Lessons per Module in lms_content_db ===');
  console.table(les1.rows);

  const les2 = await p2.query('SELECT "moduleId", count(*) FROM "Lesson" GROUP BY "moduleId"');
  console.log('=== Lessons per Module in lms_edutech_db ===');
  console.table(les2.rows);

  await p1.end();
  await p2.end();
}
check();
