import { IsValidString } from '../../guards';
import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **all** strategies
 */
export const byAll: EmployeeRowReducer = (accumulator, current) => {
  if (
    !accumulator.some(
      (v) =>
        (IsValidString(v.Email) && v.Email.toLowerCase() === current.Email.toLowerCase()) ||
        (IsValidString(v.Phone) && v.Phone.toLowerCase() === current.Phone.toLowerCase()),
    )
  ) {
    accumulator.push(current);
  }
  return accumulator;
};
