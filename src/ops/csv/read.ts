import { createReadStream } from 'fs';
import { EmployeeRow } from '@src/interfaces';
import { parse } from '@fast-csv/parse';

/**
 * Read a given CSV file into an object
 */
export async function read(file: string): Promise<EmployeeRow[]> {
  const data: EmployeeRow[] = [];
  const parser = parse<EmployeeRow, EmployeeRow>({
    headers: true,
    ignoreEmpty: true,
    discardUnmappedColumns: true,
  });

  await new Promise((resolve, reject) => {
    createReadStream(file)
      .pipe(parser)
      .on('error', (err) => reject(err))
      .on('data', (row) => data.push(row))
      .on('end', () => resolve(data));
  });

  return data;
}
