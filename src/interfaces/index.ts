export interface EmployeeRow {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
}

export const Strategies = ['email', 'phone', 'email_or_phone'] as const;
export type Strategy = typeof Strategies[number];

export type EmployeeRowReducer = (accumulator: EmployeeRow[], current: EmployeeRow) => EmployeeRow[];
