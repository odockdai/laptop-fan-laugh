import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny line, read cold with no setup — fresh self-deprecation
// that lands on the last word.
const LINE = "My laptop fan sounds like it's doing the job I was hired for.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
