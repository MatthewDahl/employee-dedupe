#!/usr/bin/env -S node -r "ts-node/register"

import { resolve } from 'path';
import { IsValidStrategy } from './guards';
import { args } from './ops/arguments';
import { read } from './ops/csv/read';
import { write } from './ops/csv/write';
import { selectStrategy } from './ops/selectStrategy';

export const main = async (): Promise<void> => {
  // Parse CLI arguments
  const { input, strategy } = await args;
  IsValidStrategy(strategy);

  // Read csv data into data structure
  const file = resolve(process.cwd(), input);
  const employees = await read(file);

  console.log('Original entries: %s', employees.length);

  // Determine strategy from input + dedupe values
  const deduper = selectStrategy(strategy);
  const deduped = employees.reduce(deduper, []);

  console.log('Deduped entries: %s', deduped.length);

  // Write deduped values to new csv file
  await write(deduped, input, strategy);
};

export default main();
