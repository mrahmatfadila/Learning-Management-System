import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: 'No command provided' }, { status: 400 });
    }

    // Split code by lines and filter empty/comments
    const commands = code
      .split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line && !line.startsWith('#'));

    if (commands.length === 0) {
      return NextResponse.json({ output: 'No commands to execute.' });
    }

    // Validate prefixes for safety
    const allowedCommandPrefixes = ['git', 'echo', 'cat', 'mkdir', 'touch', 'ls', 'dir', 'rm'];
    const invalidCommand = commands.find((cmd: string) => {
      const baseCmd = cmd.split(/\s+/)[0].toLowerCase();
      return !allowedCommandPrefixes.includes(baseCmd);
    });

    if (invalidCommand) {
      return NextResponse.json({ 
        output: `$ ${invalidCommand}\nError: Perintah tidak diizinkan. Hanya perintah Git dan dasar (mkdir, touch, echo, dll.) yang diizinkan untuk keamanan.` 
      });
    }

    // Create a temporary workspace for this git run
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'lms-git-'));
    
    // Always initialize a dummy git repository in this temporary workspace
    await new Promise((resolve) => exec('git init && git config user.name "Siswa" && git config user.email "siswa@lms.test"', { cwd: tmpDir }, resolve));
    
    // Create some dummy files in the directory so git status/add can be practiced
    await fs.writeFile(path.join(tmpDir, 'readme.md'), '# Repositori Latihan\nIni adalah file latihan Git.');
    await fs.writeFile(path.join(tmpDir, 'index.html'), '<h1>Hello World</h1>');

    let output = '';
    let hasError = false;

    for (const cmd of commands) {
      output += `$ ${cmd}\n`;
      const result = await new Promise<{ stdout: string; stderr: string; code: number }>((resolve) => {
        exec(cmd, { cwd: tmpDir }, (err, stdout, stderr) => {
          resolve({
            stdout: stdout || '',
            stderr: stderr || '',
            code: err ? err.code || 1 : 0
          });
        });
      });

      if (result.stdout) output += result.stdout;
      if (result.stderr) output += result.stderr;
      output += '\n';

      if (result.code !== 0) {
        hasError = true;
        break; // stop on first error
      }
    }

    // Clean up temporary workspace
    try {
      await fs.rm(tmpDir, { recursive: true, force: true });
    } catch {}

    return NextResponse.json({ output, error: hasError ? 'Terjadi kesalahan saat menjalankan perintah Git.' : null });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
