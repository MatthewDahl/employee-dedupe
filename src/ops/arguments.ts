import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Strategies } from '../interfaces';

/**
 * Parse positional arguments
 */
export const args = yargs(hideBin(process.argv))
  .command('dedupe <input> <strategy>', 'create a deduped copy of input file', (yargs) =>
    yargs
      .positional('input', {
        describe: 'Path to Employee CSV',
        type: 'string',
        demandOption: true,
      })
      .positional('strategy', {
        describe: 'Strategy to use for dedupe process',
        type: 'string',
        choices: Strategies,
        demandOption: true,
      }),
  )
  .help().argv;
