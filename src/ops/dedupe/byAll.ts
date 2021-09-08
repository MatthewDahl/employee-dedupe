import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **all** strategies
 */
export const byAll: EmployeeRowReducer = (accumulator, current) => {
  if (!accumulator.some((v) => v.Email === current.Email || v.Phone === current.Phone)) {
    accumulator.push(current);
  }
  return accumulator;
};
