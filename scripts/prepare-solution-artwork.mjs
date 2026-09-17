import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const assets = [
  ['public/mobile-connected-solutions.b64', 'public/mobile-connected-solutions.webp'],
  ['public/systems-data-integration.b64', 'public/systems-data-integration.webp'],
];

for (const [source, destination] of assets) {
  const sourcePath = resolve(source);
  const destinationPath = resolve(destination);

  if (!existsSync(sourcePath)) {
    throw new Error(`Missing encoded Solutions artwork: ${source}`);
  }

  const encoded = readFileSync(sourcePath, 'utf8').trim();
  writeFileSync(destinationPath, Buffer.from(encoded, 'base64'));
  console.log(`Prepared ${destination}`);
}
