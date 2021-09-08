import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **phone** only
 */
export const byPhone: EmployeeRowReducer = (accumulator, current) => {
  if (!accumulator.some((v) => v.Phone === current.Phone)) {
    accumulator.push(current);
  }
  return accumulator;
};
