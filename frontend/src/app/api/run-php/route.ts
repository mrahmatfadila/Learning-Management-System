import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

// ─── Deployment Configuration ───────────────────────────────────────────────
// PHP binary: auto-detected from PATH on Linux/Mac, or XAMPP on Windows.
// Override with PHP_BINARY env var on your production server.
const PHP_BINARY = process.env.PHP_BINARY ||
  (process.platform === 'win32' ? 'C:\\xampp\\php\\php.exe' : 'php');

// MySQL sandbox credentials for PHP MySQL lessons.
// On production, set these env vars to your hosted MySQL instance.
const MYSQL_HOST = process.env.SANDBOX_MYSQL_HOST || '127.0.0.1';
const MYSQL_USER = process.env.SANDBOX_MYSQL_USER || 'root';
const MYSQL_PASS = process.env.SANDBOX_MYSQL_PASSWORD || '';
const MYSQL_DB   = process.env.SANDBOX_MYSQL_DATABASE || 'lms_php_sandbox';
// ─────────────────────────────────────────────────────────────────────────────


function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeValue(key: string, value: string): string {
  let val = value;
  
  // Replace Windows XAMPP path elements with mock Linux equivalents
  val = val.replace(/[a-zA-Z]:\\[xampp|wamp|php|users|temp]+[^\s]*/gi, (match) => {
    const m = match.toLowerCase();
    if (m.includes('php.ini')) return '/etc/php/8.2/cli/php.ini';
    if (m.includes('log')) return '/var/log/php_errors.log';
    if (m.includes('tmp')) return '/tmp';
    if (m.includes('pear')) return '/usr/share/php/pear';
    return '/var/www/html';
  });

  // Mask Windows user directories and computer names
  val = val.replace(/\bRAHMAT\b/gi, 'LMS-VIRTUAL-PC');
  val = val.replace(/\bLenovo\b/gi, 'Siswa');

  // Specific General Info key overrides
  if (key === 'System') {
    return 'Linux Ubuntu 22.04 LTS (LMS Virtual Kernel) x86_64';
  }
  if (key === 'Build System') {
    return 'LMS Virtual Build Engine v3.4.1';
  }
  if (key === 'Loaded Configuration File') {
    return '/etc/php/8.2/cli/php.ini';
  }
  if (key === 'Configuration File (php.ini) Path') {
    return '/etc/php/8.2/cli';
  }
  if (key === 'Host') {
    return 'lms-virtual-machine';
  }
  if (key === 'extension_dir') {
    return '/usr/lib/php/20220829';
  }
  if (key === 'include_path') {
    return '.:/usr/share/php';
  }
  if (key === 'session.save_path') {
    return '/var/lib/php/sessions';
  }
  if (key === 'upload_tmp_dir') {
    return '/tmp';
  }
  if (key === 'error_log') {
    return '/var/log/php_errors.log';
  }

  return val;
}

function formatPhpInfo(rawText: string, isDarkMode: boolean): string {
  const lines = rawText.split('\n');
  let currentSection = 'General Info';
  const sections: Record<string, Array<{ key: string; local?: string; master?: string }>> = {
    'General Info': []
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Ignore long dividers
    if (line.startsWith('____') || line.startsWith('====') || line.startsWith('***')) {
      continue;
    }
    
    // Detect section headers
    if (!line.includes('=>') && line.length < 50 && !line.includes('Directive') && !line.includes('Local Value')) {
      currentSection = line;
      if (!sections[currentSection]) {
        sections[currentSection] = [];
      }
      continue;
    }
    
    // Skip sensitive sections entirely to prevent leaking credentials/API keys
    const lowerSec = currentSection.toLowerCase();
    if (
      lowerSec.includes('environment') || 
      lowerSec.includes('variables') || 
      lowerSec.includes('additional modules') ||
      lowerSec.includes('credits') ||
      lowerSec.includes('license')
    ) {
      continue;
    }
    
    if (line.includes('=>')) {
      const parts = line.split('=>').map(p => p.trim());
      const key = parts[0];
      const local = sanitizeValue(key, parts[1]);
      
      if (parts.length === 2) {
        sections[currentSection].push({
          key,
          local
        });
      } else if (parts.length >= 3) {
        const master = sanitizeValue(key, parts[2]);
        sections[currentSection].push({
          key,
          local,
          master
        });
      }
    }
  }
  
  let sectionsHtml = '';
  for (const [secName, items] of Object.entries(sections)) {
    if (items.length === 0) continue;
    
    let rowsHtml = '';
    items.forEach(item => {
      if (item.key.toLowerCase().includes('directive') && item.local?.toLowerCase().includes('value')) {
        return;
      }
      const hasMaster = item.master !== undefined;
      rowsHtml += `
        <tr class="info-row">
          <td class="info-key">${escapeHtml(item.key)}</td>
          <td class="info-val">${escapeHtml(item.local || '')}</td>
          ${hasMaster ? `<td class="info-val master-val">${escapeHtml(item.master || '')}</td>` : ''}
        </tr>
      `;
    });
    
    const firstItem = items.find(item => item.master !== undefined);
    const isDirectiveTable = !!firstItem;
    
    sectionsHtml += `
      <div class="section-card">
        <div class="section-title">${escapeHtml(secName)}</div>
        <div class="table-responsive">
          <table class="info-table">
            <thead>
              <tr>
                <th style="width: 35%;">Directive / Option</th>
                <th>Local Value</th>
                ${isDirectiveTable ? '<th>Master Value</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@450&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Outfit', sans-serif;
      background-color: ${isDarkMode ? '#0d1117' : '#f8fafc'};
      color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
      margin: 0;
      padding: 16px;
      line-height: 1.6;
    }
    
    .header {
      background: ${isDarkMode ? '#161b22' : 'white'};
      border: 1px solid ${isDarkMode ? '#30363d' : '#e2e8f0'};
      border-radius: 16px;
      padding: 16px 20px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      box-shadow: ${isDarkMode ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.05)'};
    }
    .header-title-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .header-dot {
      width: 8px;
      height: 8px;
      background-color: #10b981;
      border-radius: 9999px;
      animation: pulse 2s infinite;
    }
    .header-title {
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${isDarkMode ? '#8b949e' : '#475569'};
    }
    
    .search-box {
      position: relative;
      display: flex;
      align-items: center;
    }
    .search-input {
      padding: 6px 12px;
      font-size: 12px;
      border-radius: 8px;
      border: 1px solid ${isDarkMode ? '#30363d' : '#cbd5e1'};
      background: ${isDarkMode ? '#0d1117' : '#f1f5f9'};
      color: ${isDarkMode ? '#f8fafc' : '#1e293b'};
      outline: none;
      width: 180px;
      transition: all 0.2s;
    }
    .search-input:focus {
      border-color: #10b981;
      box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);
      width: 220px;
    }

    .section-card {
      background: ${isDarkMode ? '#161b22' : 'white'};
      border: 1px solid ${isDarkMode ? '#30363d' : '#e2e8f0'};
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: ${isDarkMode ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.03)'};
    }
    .section-title {
      font-size: 14px;
      font-weight: 700;
      color: ${isDarkMode ? '#f8fafc' : '#0f172a'};
      margin-bottom: 12px;
      border-bottom: 2px solid ${isDarkMode ? '#21262d' : '#f1f5f9'};
      padding-bottom: 6px;
    }
    
    .table-responsive {
      overflow-x: auto;
      width: 100%;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }
    .info-table th {
      text-align: left;
      padding: 6px 10px;
      background: ${isDarkMode ? '#21262d' : '#f8fafc'};
      color: ${isDarkMode ? '#8b949e' : '#475569'};
      font-weight: 600;
      border-bottom: 1px solid ${isDarkMode ? '#30363d' : '#e2e8f0'};
    }
    .info-table td {
      padding: 6px 10px;
      border-bottom: 1px solid ${isDarkMode ? '#21262d' : '#f1f5f9'};
      word-break: break-all;
    }
    .info-key {
      font-weight: 500;
      color: ${isDarkMode ? '#c9d1d9' : '#334155'};
    }
    .info-val {
      font-family: 'JetBrains Mono', monospace;
      color: ${isDarkMode ? '#a5d6ff' : '#0969da'};
    }
    .master-val {
      color: ${isDarkMode ? '#8b949e' : '#64748b'};
    }
    .info-row:hover {
      background: ${isDarkMode ? '#21262d50' : '#f8fafc'};
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-title-wrapper">
      <div class="header-dot"></div>
      <div class="header-title">PHP Info Dashboard</div>
    </div>
    <div class="search-box">
      <input type="text" id="searchInput" class="search-input" placeholder="Cari direktif..." onkeyup="filterInfo()">
    </div>
  </div>

  ${sectionsHtml}

  <script>
    function filterInfo() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const rows = document.querySelectorAll('.info-row');
      const cards = document.querySelectorAll('.section-card');
      
      cards.forEach(card => {
        let cardHasMatch = false;
        const cardRows = card.querySelectorAll('.info-row');
        
        cardRows.forEach(row => {
          const keyText = row.querySelector('.info-key').textContent.toLowerCase();
          const valText = row.querySelector('.info-val').textContent.toLowerCase();
          
          if (keyText.includes(query) || valText.includes(query)) {
            row.style.display = '';
            cardHasMatch = true;
          } else {
            row.style.display = 'none';
          }
        });
        
        if (cardHasMatch || query === '') {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { code, theme, method, postData } = await req.json();
    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 });
    }

    let codeToRun = code;

    // Detect MySQL lesson: procedural ($servername + $username) OR OOP inline (new mysqli/PDO with literal credentials)
    const isMysqlLesson = (
      (/\$servername\s*=\s*['"]localhost['"]/i.test(codeToRun) && /\$username\s*=\s*['"]username['"]/i.test(codeToRun)) ||
      /new\s+mysqli\s*\(\s*['"]localhost['"]\s*,\s*['"]username['"]/i.test(codeToRun) ||
      /mysqli_connect\s*\(\s*['"]localhost['"]\s*,\s*['"]username['"]/i.test(codeToRun) ||
      /new\s+PDO\s*\(\s*['"]mysql:[^'"]*['"]\s*,\s*['"]username['"]/i.test(codeToRun)
    );

    if (isMysqlLesson) {
      // Map procedural variable-style credentials → server env-based values
      codeToRun = codeToRun.replace(/\$servername\s*=\s*['"]localhost['"]/gi, `$servername = "${MYSQL_HOST}"`);
      codeToRun = codeToRun.replace(/\$username\s*=\s*['"]username['"]/g, `$username = "${MYSQL_USER}"`);
      codeToRun = codeToRun.replace(/\$password\s*=\s*['"]password['"]/g, `$password = "${MYSQL_PASS}"`);
      codeToRun = codeToRun.replace(/\$dbname\s*=\s*['"]myNewDatabase['"]/g, `$dbname = "${MYSQL_DB}"`);
      codeToRun = codeToRun.replace(/\$dbname\s*=\s*['"]database['"]/g, `$dbname = "${MYSQL_DB}"`);

      // Fix procedural inline: mysqli_connect('localhost', 'username', 'password', [db])
      codeToRun = codeToRun.replace(
        /mysqli_connect\s*\(\s*['"]localhost['"]\s*,\s*['"]username['"]\s*,\s*['"]password['"]\s*(?:,\s*['"][^'"]*['"]\ ?)?/gi,
        (_: string, db: string) => db
          ? `mysqli_connect("${MYSQL_HOST}", "${MYSQL_USER}", "${MYSQL_PASS}", "${MYSQL_DB}")`
          : `mysqli_connect("${MYSQL_HOST}", "${MYSQL_USER}", "${MYSQL_PASS}")`
      );
      codeToRun = codeToRun.replace(/mysqli_connect\s*\(\s*['"]localhost['"]/gi, `mysqli_connect("${MYSQL_HOST}"`);

      // Fix OOP 4-arg: new mysqli('localhost','username','password','database')
      codeToRun = codeToRun.replace(
        /new\s+mysqli\s*\(\s*['"]localhost['"]\s*,\s*['"]username['"]\s*,\s*['"]password['"]\s*,\s*['"][^'"]*['"]/gi,
        `new mysqli("${MYSQL_HOST}", "${MYSQL_USER}", "${MYSQL_PASS}", "${MYSQL_DB}"`
      );
      // Fix OOP 3-arg: new mysqli('localhost','username','password')
      codeToRun = codeToRun.replace(
        /new\s+mysqli\s*\(\s*['"]localhost['"]\s*,\s*['"]username['"]\s*,\s*['"]password['"]/gi,
        `new mysqli("${MYSQL_HOST}", "${MYSQL_USER}", "${MYSQL_PASS}"`
      );
      codeToRun = codeToRun.replace(/new\s+mysqli\s*\(\s*['"]localhost['"]/gi, `new mysqli("${MYSQL_HOST}"`);

      // Fix PDO inline: new PDO('mysql:host=localhost;...','username','password')
      codeToRun = codeToRun.replace(
        /new\s+PDO\s*\(\s*['"]mysql:host=localhost([^'"]*)['"]\s*,\s*['"]username['"]\s*,\s*['"]password['"]/gi,
        `new PDO("mysql:host=${MYSQL_HOST}$1;dbname=${MYSQL_DB}", "${MYSQL_USER}", "${MYSQL_PASS}"`
      );
      codeToRun = codeToRun.replace(/mysql:host=localhost/gi, `mysql:host=${MYSQL_HOST}`);

      // ── Smart Table Bootstrap ────────────────────────────────────────────────
      // Parse the lesson code to find:
      //   1. Tables explicitly created by the lesson (CREATE TABLE ...)
      //   2. Tables referenced in SQL queries (SELECT FROM, INSERT INTO, UPDATE, DELETE FROM, JOIN)
      // Any referenced-but-not-created table is auto-created with a universal schema.
      const createdTablesPattern = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?/gi;
      const referencedTablesPattern = /(?:FROM|JOIN|INTO|UPDATE|DELETE\s+FROM)\s+[`"']?(\w+)[`"']?/gi;

      const createdTables = new Set<string>();
      const referencedTables = new Set<string>();
      const ignoredTables = new Set(['information_schema', 'mysql', 'performance_schema', 'sys']);

      let tm: RegExpExecArray | null;
      while ((tm = createdTablesPattern.exec(codeToRun)) !== null) {
        createdTables.add(tm[1].toLowerCase());
      }
      while ((tm = referencedTablesPattern.exec(codeToRun)) !== null) {
        const tbl = tm[1].toLowerCase();
        if (!ignoredTables.has(tbl) && tbl !== MYSQL_DB) referencedTables.add(tbl);
      }

      // Tables the lesson uses but doesn't create itself → bootstrap must create them
      const missingTables = [...referencedTables].filter(t => !createdTables.has(t));

      // Universal schema: covers common column names in English + Indonesian tutorials
      const universalTableDDL = (tableName: string) => `CREATE TABLE IF NOT EXISTS \`${tableName}\` (
    id         INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname  VARCHAR(50),
    lastname   VARCHAR(50),
    nama       VARCHAR(100),
    username   VARCHAR(50),
    password   VARCHAR(100),
    email      VARCHAR(100),
    phone      VARCHAR(20),
    age        INT DEFAULT 25,
    address    TEXT,
    kota       VARCHAR(100),
    provinsi   VARCHAR(100),
    status     VARCHAR(20) DEFAULT 'active',
    reg_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`;

      const tableCreates = missingTables
        .map(t => `  mysqli_query($__boot, "${universalTableDDL(t)}");`)
        .join('\n');

      const mysqlBootstrap = `<?php
// --- LMS MySQL Sandbox Bootstrap (hidden from students) ---
$__boot = @mysqli_connect("${MYSQL_HOST}", "${MYSQL_USER}", "${MYSQL_PASS}");
if ($__boot) {
  mysqli_query($__boot, "CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}");
  mysqli_select_db($__boot, "${MYSQL_DB}");
${tableCreates}
  mysqli_close($__boot);
}
// --- End Bootstrap ---
?>
`;
      codeToRun = codeToRun.replace(/(<\?php)/i, `${mysqlBootstrap}$1`);
    } else {
      // Non-MySQL: still sanitize any stray placeholder credentials
      codeToRun = codeToRun.replace(/\$username\s*=\s*['"]username['"]/g, '$username = "root"');
      codeToRun = codeToRun.replace(/\$password\s*=\s*['"]password['"]/g, '$password = ""');
    }

    // Inject "IF NOT EXISTS" to avoid collision on repeated runs
    codeToRun = codeToRun.replace(/CREATE\s+DATABASE\s+(?!IF)/gi, 'CREATE DATABASE IF NOT EXISTS ');
    codeToRun = codeToRun.replace(/CREATE\s+TABLE\s+(?!IF)/gi, 'CREATE TABLE IF NOT EXISTS ');



    // Inject mock form values if present
    let mockFormVars = '';
    if (postData && typeof postData === 'object') {
      const isPost = method === 'POST';
      const targetSuperglobal = isPost ? '$_POST' : '$_GET';
      for (const [key, value] of Object.entries(postData)) {
        const escapedKey = key.replace(/'/g, "\\'");
        const escapedValue = String(value).replace(/'/g, "\\'");
        mockFormVars += `${targetSuperglobal}['${escapedKey}'] = '${escapedValue}';\n`;
        mockFormVars += `$_REQUEST['${escapedKey}'] = '${escapedValue}';\n`;
      }
    }

    // Inject mock server variables into $_SERVER to avoid PHP CLI warnings in lessons like PHP Superglobals
    const mockServerVars = `
$_SERVER['SERVER_NAME'] = $_SERVER['SERVER_NAME'] ?? 'devgrow-lms.test';
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_HOST'] ?? 'devgrow-lms.test';
$_SERVER['HTTP_USER_AGENT'] = $_SERVER['HTTP_USER_AGENT'] ?? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) LMS-Student-Browser';
$_SERVER['PHP_SELF'] = $_SERVER['PHP_SELF'] ?? '/index.php';
$_SERVER['SCRIPT_NAME'] = $_SERVER['SCRIPT_NAME'] ?? '/index.php';
$_SERVER['REQUEST_METHOD'] = $_SERVER['REQUEST_METHOD'] ?? '${method || 'GET'}';
$_SERVER['REMOTE_ADDR'] = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$_SERVER['SERVER_PORT'] = $_SERVER['SERVER_PORT'] ?? '80';
${mockFormVars}
`;

    // Parse files defined using "// File: filename.php" comments
    const files: Record<string, string> = {};
    const fileRegex = /(?:\/\/|#|\/\*)\s*File:\s*([a-zA-Z0-9_\-\.]+)\s*(?:\*\/)?\n([\s\S]*?)(?=(?:\/\/|#|\/\*)\s*File:|$)/gi;
    
    let match;
    let hasFiles = false;
    let entryPoint = 'index.php';
    let firstFile = '';

    while ((match = fileRegex.exec(codeToRun)) !== null) {
      const fileName = match[1].trim();
      const fileContent = match[2].trim();
      files[fileName] = fileContent;
      hasFiles = true;
      if (!firstFile) firstFile = fileName;
    }

    if (files['index.php']) {
      entryPoint = 'index.php';
    } else if (firstFile) {
      entryPoint = firstFile;
    }

    // Inject mock server variables into the entry file content
    let entryContent = hasFiles ? (files[entryPoint] || '') : codeToRun;
    if (/<\?php/i.test(entryContent)) {
      entryContent = entryContent.replace(/<\?php/i, `<?php\n${mockServerVars}\n`);
    } else {
      entryContent = `<?php\n${mockServerVars}\n?>\n` + entryContent;
    }
    
    if (hasFiles) {
      files[entryPoint] = entryContent;
    }

    // Create a temporary workspace for PHP execution
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'lms-php-'));
    let output = { stdout: '', stderr: '' };

    try {
      if (hasFiles) {
        // Write all virtual files to the temp directory
        for (const [name, content] of Object.entries(files)) {
          await fs.writeFile(path.join(tmpDir, name), content);
        }
      } else {
        // Just write the single entry file
        await fs.writeFile(path.join(tmpDir, 'index.php'), entryContent);
      }

      // Execute PHP CLI in the temporary directory
      output = await new Promise<{ stdout: string; stderr: string; timedOut?: boolean }>((resolve) => {
        const php = spawn(PHP_BINARY, [hasFiles ? entryPoint : 'index.php'], { cwd: tmpDir });
        let stdout = '';
        let stderr = '';

        const timer = setTimeout(() => {
          php.kill('SIGKILL');
          resolve({ stdout, stderr: stderr + '\nExecution timed out (max 5 seconds).', timedOut: true });
        }, 5000);

        php.stdout.on('data', (data) => {
          stdout += data.toString();
        });

        php.stderr.on('data', (data) => {
          stderr += data.toString();
        });

        php.on('close', () => {
          clearTimeout(timer);
          resolve({ stdout, stderr });
        });
      });
    } finally {
      // Clean up the temporary workspace
      try {
        await fs.rm(tmpDir, { recursive: true, force: true });
      } catch {}
    }

    let finalHtml = output.stdout;
    const isDarkMode = theme === 'dark';

    const isPhpInfo = finalHtml.includes('PHP Version =>') && finalHtml.includes('System =>');
    if (isPhpInfo) {
      finalHtml = formatPhpInfo(finalHtml, isDarkMode);
    } else {
      // Check if the output contains HTML tags.
      // If it is just plain text, wrap it in a premium styled container card.
      const hasHtmlTags = /<[a-z][\s\S]*>/i.test(finalHtml);
      if (!hasHtmlTags && finalHtml.trim()) {
        finalHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=JetBrains+Mono:wght@450&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Outfit', sans-serif;
      background-color: ${isDarkMode ? '#0d1117' : '#f8fafc'};
      color: ${isDarkMode ? '#e2e8f0' : '#1e293b'};
      margin: 0;
      padding: 16px;
      line-height: 1.6;
    }
    .preview-container {
      background: ${isDarkMode ? '#161b22' : 'white'};
      border: 1px solid ${isDarkMode ? '#30363d' : '#e2e8f0'};
      border-radius: 16px;
      padding: 20px;
      box-shadow: ${isDarkMode ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)'};
    }
    .preview-header {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${isDarkMode ? '#8b949e' : '#64748b'};
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .preview-header::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #10b981;
      border-radius: 9999px;
    }
    pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      background-color: #0f172a;
      color: #f8fafc;
      padding: 16px;
      border-radius: 10px;
      margin: 0;
      white-space: pre-wrap;
      word-break: break-all;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <div class="preview-container">
    <div class="preview-header">PHP Interpreter Output</div>
    <pre>${escapeHtml(finalHtml)}</pre>
  </div>
</body>
</html>`;
      }
    }

    return NextResponse.json({ output: finalHtml, error: output.stderr || null });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
