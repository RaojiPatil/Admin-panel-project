const crypto = require("crypto-js");

// Generate a secret key for encryption
const encryptionKey = crypto.randomBytes(32); // 32 bytes = 256 bits

// Create an initialization vector (IV)
const iv = crypto.randomBytes(16); // 16 bytes = 128 bits

// Create a cipher object with AES algorithm
const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);

// Encrypt the data
let encryptedData = cipher.update('Your data to be encrypted', 'utf8', 'hex');
encryptedData += cipher.final('hex');

// Send the encrypted data and encryption key/IV to the frontend
const response = {
  encryptedData,
  encryptionKey: encryptionKey.toString('hex'),
  iv: iv.toString('hex')
};

// Send the response to the frontend
res.json(response);


// Convert the encryption key and IV back to buffers
const keyBuffer = Buffer.from(encryptionKey, 'hex');
const ivBuffer = Buffer.from(iv, 'hex');

// Create a decipher object with AES algorithm
const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, ivBuffer);

// Decrypt the data
let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
decryptedData += decipher.final('utf8');

// Use the decrypted data as needed
console.log(decryptedData);
