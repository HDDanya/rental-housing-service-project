require('dotenv').config();
require('@babel/register');

// const cors = require('cors');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const mainRouter = require('./routers/mainRouter');
const flatRouter = require('./routers/flatRouter')

const check = require("../db/connectCheck")

const app = express();

const { PORT, SECRET } = process.env;

check();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     name: 'sid',
//     store: new FileStore({}),
//     secret: SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 10,
//         httpOnly: true,
//         secure: false,
//     }   //secure: елси https протокол, то ставим true
// }))

// app.use((req, res, next) => {
//     console.log('USER=====>>>>>', req.session.username);
//     next();
// });

app.use('/', mainRouter);

app.use('/form/flat', flatRouter);

app.listen(PORT, async () => {
    console.log(`Сервер поднят на ${PORT} порту!`);
});