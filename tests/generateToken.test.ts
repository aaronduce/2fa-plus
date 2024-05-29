import { generateToken } from '../src';

test('Generate a token from existing TOTP secret.', () => {
  const result = generateToken('XHFDAFAI5OQDMFTLY27P72UBWXAJBO2Y').then((result) => {
    expect(result);
  });
});
