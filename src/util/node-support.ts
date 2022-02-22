import CryptoJS from 'crypto-js';

export async function signMessage(message: string, secret: string): Promise<string> {
  return CryptoJS.HmacSHA256(message, secret).toString();
};
