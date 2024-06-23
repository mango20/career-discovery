import crypto from "node:crypto";

const generateHmac = (text, secret) => {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(text);
  const hmacDigest = hmac.digest("hex");
  return hmacDigest;
};

export default generateHmac;
