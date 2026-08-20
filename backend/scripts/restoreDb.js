const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const backupDir = path.join(__dirname, '../backups');

function restoreDatabase(targetFile) {
  try {
    const dbUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/lms_db';
    let filepath = targetFile ? path.resolve(targetFile) : path.join(backupDir, 'latest.sql');

    if (!fs.existsSync(filepath)) {
      console.error(`❌ Backup file not found: ${filepath}`);
      process.exit(1);
    }

    console.log(`🔄 Restoring PostgreSQL database from: ${filepath}...`);
    execSync(`psql "${dbUrl}" -f "${filepath}"`, { stdio: 'inherit' });
    console.log(`✅ DATABASE RESTORE SUCCESSFUL!`);
  } catch (error) {
    console.error(`❌ Database restore failed:`, error.message);
    process.exit(1);
  }
}

const customFile = process.argv[2];
restoreDatabase(customFile);
