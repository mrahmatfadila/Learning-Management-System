import prisma from './lib/prisma';

async function seedAttempts() {
  console.log('Seeding Quizizz student attempts...');

  const htmlQuiz = await prisma.quizizz.findFirst({
    where: { pinCode: 'QZ-5821' }
  });

  if (!htmlQuiz) {
    console.error('HTML Quiz not found!');
    return;
  }

  // Find or create student users
  let students = await prisma.user.findMany({
    where: { role: 'STUDENT' },
    take: 5
  });

  if (students.length === 0) {
    // Get any users
    students = await prisma.user.findMany({ take: 5 });
  }

  if (students.length === 0) {
    console.error('No users found to create attempts!');
    return;
  }

  // Create attempts
  const student1 = students[0];
  if (!student1) return;
  const student2 = students[1] || student1;

  await prisma.quizizzAttempt.createMany({
    data: [
      {
        quizizzId: htmlQuiz.id,
        studentId: student1.id,
        totalScore: 5750,
        correctCount: 5,
        totalQuestions: 5,
        accuracyPct: 100,
        maxStreak: 5,
        avgTimeSeconds: 4.2
      },
      {
        quizizzId: htmlQuiz.id,
        studentId: student2.id,
        totalScore: 4200,
        correctCount: 4,
        totalQuestions: 5,
        accuracyPct: 80,
        maxStreak: 3,
        avgTimeSeconds: 6.8
      }
    ]
  });

  console.log('Sample student attempts seeded for Quizizz QZ-5821!');
}

seedAttempts()
  .catch(e => console.error('Error seeding attempts:', e))
  .finally(() => prisma.$disconnect());
