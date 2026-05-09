import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_CRYPTO_SECRET ?? "";

export function encodeData<T>(data: T): string {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();

  return encodeURIComponent(encrypted);
}

export function decodeData<T>(hash: string): T | null {
  try {
    if (!hash) return null;

    const bytes = CryptoJS.AES.decrypt(
      decodeURIComponent(hash),
      SECRET_KEY
    );
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) return null;

    return JSON.parse(decrypted) as T;
  } catch (error) {
    console.error("Failed to decode data:", error);
    return null;
  }
}
