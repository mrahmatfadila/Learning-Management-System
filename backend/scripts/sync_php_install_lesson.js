const { Pool } = require('pg');
const phpPart1Tutorial = require('./data/phpPart1Tutorial');

async function syncLesson() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  const phpInstall = phpPart1Tutorial.find(l => l.id === 'php-install');
  if (!phpInstall) return;

  const fullContent = {
    overview: phpInstall.overview,
    theory: phpInstall.theory,
    code: phpInstall.code,
    codeExplanation: phpInstall.codeExplanation,
    challenge: phpInstall.challenge,
    quiz: phpInstall.quiz
  };

  await pContent.query(
    'UPDATE "Lesson" SET content = $1, "updatedAt" = NOW() WHERE id = $2',
    [JSON.stringify(fullContent), 'php-install']
  );

  await pEdutech.query(
    'UPDATE "Lesson" SET content = $1, "updatedAt" = NOW() WHERE id = $2',
    [JSON.stringify(fullContent), 'php-install']
  );

  console.log('✅ Materi PHP Install (php-install) berhasil disinkronkan di lms_content_db dan lms_edutech_db!');

  await pContent.end();
  await pEdutech.end();
}

syncLesson().catch(console.error);
