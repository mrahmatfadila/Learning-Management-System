import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  const lessons = await prisma.lesson.findMany({
    where: { moduleId: '67adde6d-81a6-4470-b88d-506b733f87ee' },
    orderBy: { order: 'asc' }
  });
  console.log(`Total HTML Lessons: ${lessons.length}`);
  for (const l of lessons) {
    console.log(`- [${l.id}] ${l.title} (Chapter: ${l.chapter}, Type: ${l.type})`);
  }
}

main().catch(console.error).finally(() => pool.end());
