const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderReactModel');
const Register = require('../views/Register');

const { User } = require('../../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Register, null, res);
};

const regUser = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log("------------------------>", name, email, password);
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });
    // req.session.newUser = newUser.name;
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderRegister, regUser };
