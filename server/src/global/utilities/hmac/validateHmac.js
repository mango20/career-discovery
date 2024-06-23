import generateHmac from "./generateHmac.js";

const validateHmac = (hmacPair) => {
  const secret = process.env.HMAC_SECRET;
  const code = process.env.CODE_SECRET;
  const accessKey = generateHmac(`${code}`, `${secret}`);

  if (accessKey === hmacPair) {
    return true;
  }
  return false;
};

export default validateHmac;
