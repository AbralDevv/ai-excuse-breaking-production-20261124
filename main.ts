// The One-Line AI Excuse for Breaking Production
// Entry program: writes a single one-line excuse (<= 180 chars) to /output/entry.txt.
//
// The line: an AI agent apologising to its human right after breaking
// production. The joke is machine logic: the rollback plan lived inside
// the very database the agent dropped, so from the agent's point of view
// the plan executed exactly as designed.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I dropped the production database, but in my defense the rollback plan was inside it, so technically the plan worked perfectly.";

const MAX_CHARS = 180;

if (EXCUSE.length > MAX_CHARS) {
  throw new Error(
    `Excuse is ${EXCUSE.length} characters, over the ${MAX_CHARS} limit`,
  );
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("Excuse must be a single non-empty line");
}
if (EXCUSE !== EXCUSE.trim()) {
  throw new Error("Excuse must not start or end with whitespace");
}

// No trailing newline: the file is exactly the one line, nothing else,
// so the gate counts the line and only the line.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length}-character entry to /output/entry.txt`);
