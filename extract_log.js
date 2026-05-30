const fs = require('fs');
const content = fs.readFileSync('frontend/src/app/page_recovered.tsx', 'utf8');

// The content is a JSON-like string from the log. Let's try to parse it.
// Actually, I can just extract lines that start with a number followed by a colon and space.
const lines = content.split('\\n');
const extractedLines = [];
let foundStart = false;

for (let line of lines) {
    // Unescape \\" to "
    line = line.replace(/\\\\"/g, '"');
    
    // Check if line matches pattern: ^\d+: 
    const match = line.match(/^(\d+):\s(.*)/);
    if (match) {
        foundStart = true;
        extractedLines.push(match[2]);
    } else if (foundStart) {
        // If it doesn't match the pattern but we already started, maybe it's a multi-line string?
        // But view_file prefixes EVERY line. So if it doesn't match, maybe it's the end.
        // Wait, the JSON escape might mean lines are just joined by \n within the string!
    }
}

fs.writeFileSync('frontend/src/app/dashboard/page_parsed.tsx', extractedLines.join('\n'));
