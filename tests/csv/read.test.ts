import { read } from '@src/ops/csv';
import { resolve } from 'path';

describe('ops/csv - read()', () => {
  it('can call function', async () => {
    const file = resolve(__dirname, '../data/employees.csv');
    const result = await read(file);
    expect(result.length).toBe(105);
  });
});
