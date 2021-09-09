import { IsValidString } from '../../guards';
import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **email** only
 */
export const byEmail: EmployeeRowReducer = (accumulator, current) => {
  if (!accumulator.some((v) => IsValidString(v.Email) && v.Email.toLowerCase() === current.Email.toLowerCase())) {
    accumulator.push(current);
  }
  return accumulator;
};
