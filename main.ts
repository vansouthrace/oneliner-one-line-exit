import fs from 'node:fs';
import path from 'node:path';
const entry = 'I resign effective immediately; the office plant died in 2023 and nobody noticed, which honestly sums up my whole tenure here.';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
