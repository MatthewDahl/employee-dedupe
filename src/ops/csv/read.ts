import { resolve } from 'path';
import { EmployeeRow } from '@src/interfaces';
import { parseFile } from '@fast-csv/parse';

/**
 * Read a given CSV file into an object
 */
export async function read(file: string): Promise<EmployeeRow[]> {
  const fullPath = resolve(__dirname, file);

  const data: EmployeeRow[] = [];
  const parser = parseFile<EmployeeRow, EmployeeRow>(fullPath, {
    headers: true,
    ignoreEmpty: true,
    discardUnmappedColumns: true,
  });

  await new Promise<void>((resolve, reject) => {
    parser
      .on('error', (err) => reject(err))
      .on('data', (row) => data.push(row))
      .on('end', () => resolve());
  });

  return data;
}
