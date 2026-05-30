const fs = require('fs');
const path = require('path');

const dir = 'frontend/.next/dev/cache/turbopack';
const regex = /export default function DashboardPage.*?export default function DashboardPage/s; // This won't work well because it's binary.

function searchInFiles(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            searchInFiles(fullPath);
        } else if (file.endsWith('.sst')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const index = content.indexOf('export default function DashboardPage');
                if (index !== -1) {
                    console.log(`Found in ${fullPath} at index ${index}`);
                    // Extract around the index
                    const start = Math.max(0, index - 100);
                    const extract = content.substring(start, index + 5000);
                    fs.writeFileSync('extracted_' + path.basename(file) + '.txt', extract);
                    console.log(`Extracted to extracted_${path.basename(file)}.txt`);
                }
            } catch (e) {}
        }
    }
}

searchInFiles(dir);
