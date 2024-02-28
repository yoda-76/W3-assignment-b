import jwt from "jsonwebtoken";
import config from "config";

export function signJwt(object: Object) {
  
  const signingKey: string=config.get("accessTokenPrivateKey")
  return jwt.sign(object, signingKey, {
    expiresIn: 86400
  });
}

export function verifyJwt(token: string) {
  const signingKey: string=config.get("accessTokenPrivateKey")

  try {
    const data = jwt.verify(token, signingKey);
    return {
      valid: true,
      data,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      data: null,
    };
  }
}