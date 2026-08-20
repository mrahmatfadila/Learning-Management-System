const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const backupDir = path.join(__dirname, '../backups');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function backupDatabase() {
  try {
    const dbUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/lms_db';
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `backup_${timestamp}.sql`;
    const filepath = path.join(backupDir, filename);
    const latestPath = path.join(backupDir, 'latest.sql');

    console.log(`📦 Creating automatic database backup to: ${filename}...`);
    execSync(`pg_dump "${dbUrl}" --clean --if-exists -f "${filepath}"`, { stdio: 'inherit' });
    fs.copyFileSync(filepath, latestPath);

    console.log(`✅ DATABASE BACKUP SUCCESSFUL!`);
    console.log(`   - Timestamped file: ${filepath}`);
    console.log(`   - Latest snapshot: ${latestPath}`);
    return filepath;
  } catch (error) {
    console.error(`❌ Automatic database backup failed:`, error.message);
    return null;
  }
}

backupDatabase();
