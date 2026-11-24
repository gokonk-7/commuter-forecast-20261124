// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (at most 140 characters) for a city
// that does not exist, to /output/entry.txt.
//
// The line: a broadcast-weather rhythm bent into a small kindness —
// Grumbletown's drizzle clears by nine, the bus is on time, and the rain
// falls everywhere except on the commuter reading it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In Grumbletown, drizzle till nine, then bright sun \u2014 the 8:12 bus is on time, and today the rain falls everywhere except on you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

if (ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 140 cap`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
