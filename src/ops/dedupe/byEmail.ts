import { EmployeeRowReducer } from '@src/interfaces';

/**
 * Dedupe values by **email** only
 */
export const byEmail: EmployeeRowReducer = (accumulator, current) => {
  if (!accumulator.some((v) => v.Email === current.Email)) {
    accumulator.push(current);
  }
  return accumulator;
};
