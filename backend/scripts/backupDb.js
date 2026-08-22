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

    // Clean up older timestamped backups, keeping only the 3 most recent
    const files = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('backup_') && f.endsWith('.sql'))
      .sort((a, b) => b.localeCompare(a)); // Sort descending (newest first)

    if (files.length > 3) {
      const filesToDelete = files.slice(3);
      for (const oldFile of filesToDelete) {
        try {
          fs.unlinkSync(path.join(backupDir, oldFile));
          console.log(`   🧹 Pruned old backup: ${oldFile}`);
        } catch (e) {
          console.warn(`   ⚠️ Failed to delete ${oldFile}:`, e.message);
        }
      }
    }

    return filepath;
  } catch (error) {
    console.error(`❌ Automatic database backup failed:`, error.message);
    return null;
  }
}

backupDatabase();
