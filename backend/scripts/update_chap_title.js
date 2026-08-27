const { Pool } = require('pg');

async function updateChapTitle() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🔄 Memperbarui judul Chapter 35 menjadi "JS Objects Advanced"...');

  await pContent.query(`
    UPDATE "Chapter" 
    SET title = 'JS Objects Advanced', "updatedAt" = NOW() 
    WHERE id = 'js-chap-objadv'
  `);

  await pEdutech.query(`
    UPDATE "Chapter" 
    SET title = 'JS Objects Advanced', "updatedAt" = NOW() 
    WHERE id = 'js-chap-objadv'
  `);

  console.log('✅ Judul Chapter 35 berhasil diperbarui di lms_content_db & lms_edutech_db.');

  await pContent.end();
  await pEdutech.end();
}

updateChapTitle().catch(console.error);
