const userModel = require("../models/userModel");

const getUsers = (req, res) => {
  const users = userModel.get();
  res.render("user", { data: users });
};

module.exports = {
  getUsers,
};
