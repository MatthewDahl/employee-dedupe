import { main } from '@src/index';

describe('CLI Entry Tests', () => {
  it('can run tests', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    main();

    expect(consoleSpy).toHaveBeenCalledWith('CLI Entry');

    consoleSpy.mockRestore();
  });
});
