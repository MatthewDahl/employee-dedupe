import { selectStrategy } from '@src/ops/selectStrategy';

describe('ops - selectStrategy()', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it.each([
    ['email', 'byEmail'],
    ['phone', 'byPhone'],
    ['email_or_phone', 'byAll'],
  ])('strategy: <%s> --> function: <%s>', (strategy: any, expected) => {
    const result = selectStrategy(strategy);
    expect(result.name).toBe(expected);
  });

  it('Throws errer when strategy is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    selectStrategy('BAD_STRATEGY' as any);

    expect(consoleSpy).toHaveBeenCalledWith('Unknown strategy <%s>', 'BAD_STRATEGY');
    expect(exitSpy).toHaveBeenCalledWith(1);

    consoleSpy.mockRestore();
    exitSpy.mockRestore();
  });
});
