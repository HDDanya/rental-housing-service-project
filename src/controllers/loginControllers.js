const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderReactModel');
const Login = require('../views/Login');
const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, {}, res);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const passCheck = await bcrypt.compare(password, user.password);
    console.log('🚀 ~ user', user)
    
    if (passCheck) {
      req.session.newUser = user;
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};
module.exports = { renderLogin, loginUser };
