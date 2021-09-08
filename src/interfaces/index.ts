export interface EmployeeRow {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
}

export type Strategy = 'email' | 'phone' | 'email_or_phone';

export type EmployeeRowReducer = (accumulator: EmployeeRow[], current: EmployeeRow) => EmployeeRow[];
