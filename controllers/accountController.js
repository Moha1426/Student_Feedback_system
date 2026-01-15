 const Account = require("../models/accountmodels");

// CREATE account
exports.createAccount = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all account
exports.getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

// UPDATE account
exports.updateAccount = async (req, res) => {
  const account = await Account.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(account);
};

// DELeTE account
exports.deleteAccount = async (req, res) => {
  await Account.findByIdAndDelete(req.params.id);
  res.json({ message: "Account deleted" });
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Account.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }
  res.json({ message: "Login success", user });
};
