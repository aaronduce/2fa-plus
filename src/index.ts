import notp from "notp";
import crypto from "crypto";
import b32 from "thirty-two";

export async function generateSecret(name: string, account: string): Promise<{
    secret: string,
    uri: string,
    qr: string
}> {
    const bin = crypto.randomBytes(20);
    const base32 = b32.encode(bin).toString("utf8").replace(/=/g, "");

    const secret = base32
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim()
        .split(" ")
        .join("")
        .toUpperCase();

    const uri = `otpauth://totp/${name}:${account}?secret=${secret}&issuer=${name}`;
    
    // create QR code into base64 png string

    const qrLib = require("qrcode");

    const qr = await new Promise<string>((resolve, reject) => {
        qrLib.toDataURL(uri, function (err: any, url: string) {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });

    return { secret, uri, qr };
}

export async function generateToken(secret: string): Promise<string> {
    if (!secret) return "";

    const unformatted = secret.replace(/\W+/g, "").toUpperCase();
    const bin = b32.decode(unformatted);

    return notp.totp.gen(bin);
}

export async function verifyToken(secret: string, token: string): Promise<boolean> {
    if (!token || !secret) return false;

    const unformatted = secret.replace(/\W+/g, "").toUpperCase();
    const bin = b32.decode(unformatted);

    const verify = notp.totp.verify(token.replace(/\W+/g, ""), bin, {
        window: 4,
        time: 30
    });

    if (!verify) return false;

    // if notp returns any instance of delta, including 0, then it is valid. delta refers to time skew.
    if (verify.delta) return true;
    if (verify.delta === 0) return true;

    return false;
}