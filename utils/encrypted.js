import crypto from "crypto";
import Vote from "../models/Vote.js";
import { createRequire } from "module";

const key = process.env.SECRET_KEY.substr(0, 32);
const method = "aes-256-gcm";

const encrypted = async (userid) => {
  const useridCipher = crypto.createCipheriv(method, key, key);

  const encryptedId =
    useridCipher.update(userid.toString(), "utf8", "hex") +
    useridCipher.final("hex");

  const exists = await Vote.findOne({ where: { userid: encryptedId } });

  if (exists) {
    return null;
  } else {
    return encryptedId;
  }
};

export default encrypted;
