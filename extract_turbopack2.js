const fs = require('fs');
const path = require('path');
const dir = 'frontend/.next/dev/cache/turbopack';
let found = 0;
function searchInFiles(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            searchInFiles(fullPath);
        } else if (file.endsWith('.sst')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const index = content.indexOf('InstructorStudentManagement');
                if (index !== -1) {
                    console.log('Found in ' + fullPath);
                    const start = Math.max(0, index - 5000);
                    const extract = content.substring(start, index + 250000);
                    fs.writeFileSync('turbopack_extract_' + found + '.txt', extract);
                    found++;
                }
            } catch (e) {}
        }
    }
}
searchInFiles(dir);
