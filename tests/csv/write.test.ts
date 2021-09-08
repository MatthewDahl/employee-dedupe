import { EmployeeRow } from '@src/interfaces';
import { write } from '@src/ops/csv';
import { resolve } from 'path';

describe('ops/csv - write()', () => {
  it('can call function', async () => {
    const file = resolve(__dirname, '../data/employees.csv');
    const values: EmployeeRow[] = [
      { FirstName: 'Tester01', LastName: 'McTesterton02', Email: 'email01', Phone: 'phone01' },
      { FirstName: 'Tester02', LastName: 'McTesterton02', Email: 'email02', Phone: 'phone02' },
    ];

    await expect(write(values, file, 'email_or_phone')).resolves.toBeUndefined();
  });
});
