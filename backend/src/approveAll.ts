import { pool } from './lib/prisma';

async function approveAll() {
  const res = await pool.query('UPDATE "Enrollment" SET status = \'APPROVED\'');
  console.log('✅ All enrollments updated to APPROVED:', res.rowCount);
  process.exit(0);
}

approveAll();
