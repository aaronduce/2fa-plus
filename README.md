# 2fa-plus

Implementation of two-factor authentication in Node, made simple.

Credit for original implementation on which this has been abstracted from goes to [node-2fa](https://github.com/jeremyscalpello/node-2fa) - Jeremy Scalpello.

This has been reworked from the ground up to:
- Not be reliant on Google Charts for QR code generation, and instead return a base64-png image.
- Full typescript support.

---

There are a number of applications which support 2-Factor Authentication, namely

- Authy [iPhone](https://itunes.apple.com/us/app/authy/id494168017?mt=8) | [Android](https://play.google.com/store/apps/details?id=com.authy.authy&hl=en) | [Chrome](https://chrome.google.com/webstore/detail/authy/gaedmjdfmmahhbjefcbgaolhhanlaolb?hl=en) | [Linux](https://www.authy.com/personal/) | [OS X](https://www.authy.com/personal/) 
- Google Authenticator [iPhone](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8) | [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)
- Microsoft Authenticator [iPhone](https://apps.apple.com/gb/app/microsoft-authenticator/id983156458) | [Android](https://play.google.com/store/apps/details?id=com.microsoft.msa.authenticator)

This module uses [`notp`](https://github.com/guyht/notp) which implements `TOTP` [(RFC 6238)](https://www.ietf.org/rfc/rfc6238.txt)
(the _Authenticator_ standard), which is based on `HOTP` [(RFC 4226)](https://www.ietf.org/rfc/rfc4226.txt)
to provide codes that are exactly compatible with all other _Authenticator_ apps and services that use them.

Usage
=====

```bash
npm install 2fa-plus --save
```

TBC