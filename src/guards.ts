import { Strategies, Strategy } from './interfaces';

/**
 * Determine if value is a valid string
 * @param it value to type check
 */
export function IsValidString(it: unknown): it is string {
  return it != null && typeof it === 'string' && it.trim().length > 0;
}

/**
 * Determine if value is a valid Strategy
 * @param it value to type check
 */
export function IsValidStrategy(it: unknown): asserts it is Strategy {
  if (!IsValidString(it) || !Strategies.includes(it as Strategy)) {
    console.error('Invalid strategy');
    process.exit(1);
  }
}
