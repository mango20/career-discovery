import generateHmac from "../../global/utilities/hmac/generateHmac.js";
import dotenv from "dotenv/config";

const generateKey = async () => {
  const secret = process.env.HMAC_SECRET;
  const code = process.env.CODE_SECRET;
  const accessKey = generateHmac(`${code}`, `${secret}`);
};

generateKey();
