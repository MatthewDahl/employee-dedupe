describe('CLI Entry Tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it.each([
    { file: 'tests/data/employees.csv', strategy: 'email', expected: 101 },
    { file: 'tests/data/employees.csv', strategy: 'phone', expected: 101 },
    { file: 'tests/data/employees.csv', strategy: 'email_or_phone', expected: 100 },
  ])('can dedupe using <$strategy> strategy', async ({ file, strategy, expected }) => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    process.argv = ['ts', 'jest', 'dedupe', file, strategy];

    const { main } = await import('@src/index');
    await main();

    expect(consoleSpy).toHaveBeenCalledWith('Deduped entries: %s', expected);

    consoleSpy.mockRestore();
  });
});
