const validator = require("validator");
const crypto = require("crypto");
function validateUser(body, enforce) {
    if (!body) {
      throw new Error("Invalid body");
    }
  
    const { email, id, accountId, registrationTime } = body;
    if (enforce && !email || email && !validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
  
    if (enforce && !accountId || accountId && "string" !== typeof accountId) {
      throw new Error("Invalid accountId");
    }
  
    if (enforce && !registrationTime || registrationTime && "string" !== typeof registrationTime) {
      throw new Error("Invalid registrationTime");
    }
    return {
      id: id || crypto.randomBytes(8).toString("hex"),
      email,
      accountId,
      registrationTime
    }
  }
  module.exports = validateUser
  