const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function run() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, role: true, email: true }
    });
    console.log('=== USERS ===');
    console.log(users);

    const modules = await prisma.module.findMany({
      select: { id: true, title: true, instructorId: true }
    });
    console.log('\n=== MODULES ===');
    console.log(modules);

    const enrollments = await prisma.enrollment.findMany({
      select: { id: true, studentId: true, moduleId: true, status: true }
    });
    console.log('\n=== ENROLLMENTS ===');
    console.log(enrollments);

    const schedules = await prisma.schedule.findMany({
      include: {
        module: { select: { title: true } },
        instructor: { select: { name: true } }
      }
    });
    console.log('\n=== SCHEDULES ===');
    console.log(schedules);

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

run();
