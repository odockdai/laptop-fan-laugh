import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny line, read cold with no setup. The original inversion
// of inbox-zero: the zero exists, just never alone.
const LINE = "My inbox has a zero somewhere in it. I've seen it. It's part of a number.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
