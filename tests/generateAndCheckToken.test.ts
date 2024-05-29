import { generateToken, verifyToken } from '../src';

test('Generate a token from existing TOTP secret, and check it using verify.', () => {
  const result = generateToken('XHFDAFAI5OQDMFTLY27P72UBWXAJBO2Y').then((result) => {
    expect(result);

    const verify = verifyToken('XHFDAFAI5OQDMFTLY27P72UBWXAJBO2Y', result).then((verify) => {
      expect(verify);
      expect(verify).toBe(true);
    });
  });
});
