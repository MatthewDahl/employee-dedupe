import { IsValidStrategy } from '@src/guards';

describe('guards', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it.each([['email'], ['phone'], ['email_or_phone']])('strategy: <%s>', (strategy) => {
    expect(IsValidStrategy(strategy)).toBeUndefined();
  });

  it('Throws errer when strategy is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    IsValidStrategy('BAD_STRATEGY');

    expect(consoleSpy).toHaveBeenCalledWith('Invalid strategy');
    expect(exitSpy).toHaveBeenCalledWith(1);

    consoleSpy.mockRestore();
    exitSpy.mockRestore();
  });
});
