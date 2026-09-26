const { Pool } = require('pg');

async function test() {
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  
  const eduRes = await pEdutech.query('SELECT count(*) FROM "Lesson" WHERE "moduleId" = \'mastering-ui-design-for-impactful-solutions\' OR "moduleId" = \'javascript\'');
  const conRes = await pContent.query('SELECT count(*) FROM "Lesson" WHERE "moduleId" = \'javascript\'');
  
  console.log('Edutech DB JS lessons count:', eduRes.rows[0].count);
  console.log('Content DB JS lessons count:', conRes.rows[0].count);
  
  const eduMods = await pEdutech.query('SELECT id, title FROM "Module" WHERE id ILIKE \'%javascript%\' OR id = \'mastering-ui-design-for-impactful-solutions\' OR title ILIKE \'%javascript%\'');
  console.log('Edutech DB Modules:', eduMods.rows);

  const conMods = await pContent.query('SELECT id, title FROM "Module"');
  console.log('Content DB Modules:', conMods.rows);

  // Check what old lessons or duplicate lessons exist in Edutech DB
  const oldLessons = await pEdutech.query('SELECT id, title, "order", "chapter" FROM "Lesson" WHERE "moduleId" = \'mastering-ui-design-for-impactful-solutions\' ORDER BY "order" ASC LIMIT 10');
  console.log('Sample Edutech DB Lessons:', oldLessons.rows);

  await pEdutech.end();
  await pContent.end();
}
test().catch(console.error);
