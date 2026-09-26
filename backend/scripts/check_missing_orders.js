const { Pool } = require('pg');

async function check() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  const res = await pContent.query('SELECT id, title, "order", "chapter" FROM "Lesson" WHERE "moduleId" = \'javascript\' ORDER BY "order" ASC');
  console.log(`Content DB has ${res.rowCount} JS lessons.`);

  const orders = res.rows.map(r => r.order);
  const missingOrders = [];
  for (let i = 1; i <= 306; i++) {
    if (!orders.includes(i)) {
      missingOrders.push(i);
    }
  }
  console.log('Missing orders in Content DB (1-306):', missingOrders);

  // Check Edutech DB
  const eduRes = await pEdutech.query('SELECT id, title, "order", "chapter" FROM "Lesson" WHERE "moduleId" = \'mastering-ui-design-for-impactful-solutions\' ORDER BY "order" ASC');
  console.log(`Edutech DB has ${eduRes.rowCount} JS lessons.`);

  // Find lessons in Edutech DB that are not in Content DB
  const contentIds = new Set(res.rows.map(r => r.id));
  const obsoleteInEdutech = eduRes.rows.filter(r => !contentIds.has(r.id));
  console.log(`Obsolete/Old lessons in Edutech DB (${obsoleteInEdutech.length}):`, obsoleteInEdutech.map(r => ({ id: r.id, title: r.title, order: r.order })));

  await pContent.end();
  await pEdutech.end();
}
check().catch(console.error);
