const crypto = require("crypto");

const encrypt = (text, key) => {
  try {
    const iv = crypto.randomBytes(16);
    const password = crypto
      .createHash("sha256")
      .update(key)
      .digest("base64")
      .substr(0, 32);
    const cipher = crypto.createCipheriv("aes-256-cbc", password, iv);

    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  } catch (error) {
    console.log(error);
  }
};

const decrypt = (encryptedText, key) => {
  try {
    const textParts = encryptedText.split(":");
    const iv = Buffer.from(textParts.shift(), "hex");

    const encryptedData = Buffer.from(textParts.join(":"), "hex");
    const password = crypto
      .createHash("sha256")
      .update(key)
      .digest("base64")
      .substr(0, 32);
    const decipher = crypto.createDecipheriv("aes-256-cbc", password, iv);

    const decrypted = decipher.update(encryptedData);
    const decryptedText = Buffer.concat([decrypted, decipher.final()]);
    return decryptedText.toString();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  encrypt,
  decrypt,
};
