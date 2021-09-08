import { EmployeeRow, Strategy } from '@src/interfaces';
import { parse as parseFile, resolve } from 'path';
import { writeToPath } from '@fast-csv/format';

/**
 * Create a new CSV file with given values
 */
export async function write(values: EmployeeRow[], file: string, strategyUsed: Strategy): Promise<void> {
  const { dir, ext, name } = parseFile(file);
  const newFileName = `${Date.now()}_deduped_by_${strategyUsed}_${name}${ext}`;
  const newFile = resolve(dir, newFileName);

  return await new Promise<void>((resolve, reject) => {
    writeToPath(newFile, values, { headers: true })
      .on('error', (err) => reject(err))
      .on('finish', () => resolve());
  });
}
