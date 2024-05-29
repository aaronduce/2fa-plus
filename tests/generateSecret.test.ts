import { generateSecret } from '../src';

test('Generate a TOTP secret.', () => {
  const result = generateSecret('test', 'test').then((result) => {
    expect(result);
    expect(result).toHaveProperty('secret');
    expect(result).toHaveProperty('uri');
    expect(result).toHaveProperty('qr');

    expect(result.uri).toMatch(/^otpauth:\/\/totp\/test:test\?secret*/);
    expect(result.qr).toMatch(/^data:image\/png;base64*/);
  });
});