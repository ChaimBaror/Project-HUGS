// const auth = require('./auth/index');
const express = require("express");
const validateUser = require("./validation");

const getDB = require("../../db");
const route = express.Router();


route.post("/", async (req, res) => {
  const { body } = req;

  try {
    const account = validateUser(body, false);
    const db = await getDB();
    const newAccount = await db.account.create(account);
    // res.cookie("accountId", newAccount.id);
    res.json(newAccount);
  } catch (e) {
    res.status(422).json({
      error: e.message,
    })
  }
})

module.exports = {
  route
}