import { IsValidString } from '../../guards';
import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **phone** only
 */
export const byPhone: EmployeeRowReducer = (accumulator, current) => {
  if (!accumulator.some((v) => IsValidString(current.Phone) && v.Phone.toLowerCase() === current.Phone.toLowerCase())) {
    accumulator.push(current);
  }
  return accumulator;
};
