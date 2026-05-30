const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const users = await prisma.user.findMany({ where: { role: 'INSTRUCTOR' } });
  if (users.length === 0) return console.log('No instructors found');
  
  const id = users[0].id;
  console.log('Testing update on user:', id);
  
  // Directly update
  const updated = await prisma.user.update({
    where: { id },
    data: { specialty: 'Testing Specialty' },
    select: { id: true, name: true, specialty: true }
  });
  
  console.log('Prisma output:', updated);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
