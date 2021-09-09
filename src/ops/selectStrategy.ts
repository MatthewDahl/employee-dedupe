import { EmployeeRowReducer, Strategy } from '../interfaces';
import { byAll } from './dedupe/byAll';
import { byEmail } from './dedupe/byEmail';
import { byPhone } from './dedupe/byPhone';

/**
 * Determine strategy to use based on user input
 * @param strategy strategy provided cli
 */
export const selectStrategy = (strategy: Strategy): EmployeeRowReducer => {
  switch (strategy) {
    case 'email':
      return byEmail;
    case 'phone':
      return byPhone;
    case 'email_or_phone':
      return byAll;
    default:
      console.error('Unknown strategy <%s>', strategy);
      process.exit(1);
  }
};
