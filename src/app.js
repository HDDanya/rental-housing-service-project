require("dotenv").config();
require("@babel/register");

// const cors = require('cors');
const express = require("express");
const path = require("path");
const morgan = require("morgan");


const session = require("express-session");
const FileStore = require("session-file-store")(session);

const check = require("../db/connectCheck");
const loginRoutes = require("./routers/loginRoutes");
const regRoutes = require("./routers/regRoutes");
const mainRouter = require('./routers/mainRouters');
const flatRouter = require('./routers/flatRouters');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

check();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: "sid",
  store: new FileStore(),
  secret: SESSION_SECRET ?? "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2,
    httpOnly: true,
  },
};


app.use(session(sessionConfig));


app.use("/login", loginRoutes);
app.use("/register", regRoutes);
app.use('/', mainRouter);
app.use('/flat', flatRouter);

app.get("/logout", async (req, res) => {
  console.log(req.query);
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie("sid");
        res.redirect("/");
      });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

app.listen(PORT ?? 3000, () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});


