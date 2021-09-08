import { EmployeeRow } from '@src/interfaces';
import { byEmail } from '@src/ops/dedupe';

describe('ops/dedupe - byEmail()', () => {
  it('can call function', () => {
    const values: EmployeeRow[] = [
      { FirstName: 'Tester01', LastName: 'McTesterton02', Email: 'email01', Phone: 'phone01' },
      { FirstName: 'Tester02', LastName: 'McTesterton02', Email: 'email02', Phone: 'phone02' },
      { FirstName: 'Tester02', LastName: 'McTesterton02', Email: 'email02', Phone: 'phone02' },
      { FirstName: 'Tester02', LastName: 'McTesterton02', Email: 'email03', Phone: 'phone02' },
    ];
    const result = values.reduce(byEmail, []);
    expect(result.length).toBe(3);
  });
});
