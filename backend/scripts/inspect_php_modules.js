const { Pool } = require('pg');

async function inspect() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const modOld = await p.query('SELECT * FROM "Module" WHERE id = $1', ['php-backend-mastery']);
  console.log('Old Module:', modOld.rows);
  const modNew = await p.query('SELECT * FROM "Module" WHERE id = $1', ['php']);
  console.log('New Module:', modNew.rows);

  const enrOld = await p.query('SELECT count(*) FROM "Enrollment" WHERE "moduleId" = $1', ['php-backend-mastery']);
  console.log('Enrollments on Old Module:', enrOld.rows[0].count);
  const revOld = await p.query('SELECT count(*) FROM "Review" WHERE "moduleId" = $1', ['php-backend-mastery']);
  console.log('Reviews on Old Module:', revOld.rows[0].count);

  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const modContent = await pContent.query('SELECT * FROM "Module" WHERE id = $1', ['php']);
  console.log('Module in lms_content_db:', modContent.rows);

  await p.end();
  await pContent.end();
}
inspect();
