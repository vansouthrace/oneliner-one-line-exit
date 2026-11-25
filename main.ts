import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 138 chars, under the 140-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I hereby resign, effective immediately, because the printer has jammed for the last time and I refuse to be the only adult in this office.");
