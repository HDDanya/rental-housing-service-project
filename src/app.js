require('dotenv').config();
require('@babel/register');

const renderTemplate = require('./lib/renderReactModel');
const Contact = require('./views/Contact');

// const cors = require('cors');

const express = require('express');
const path = require('path');
const morgan = require('morgan');

// const check = require('../db/connectCheck');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const apartRoutes = require('./routers/apartRoutes');

const loginRoutes = require('./routers/loginRoutes');
const regRoutes = require('./routers/regRoutes');

const mainRouter = require('./routers/mainRouter');

const houseRouter = require('./routers/houseRoutes');
const flatRoutes = require('./routers/flatRoutes');
const apartRouter = require('./routers/apartRoutes');

const flatFormRouter = require('./routers/flatFormRouter');
const houseFormRouter = require('./routers/houseFormRouter');
const apartFormRouter = require('./routers/apartmentFormRouter');

const taskUpdateApartRouter = require('./routers/taskUpdateApartRouter');
const taskUpdateFlatRouter = require('./routers/taskUpdateFlatRouter');
const taskUpdateHouseRouter = require('./routers/taskUpdateHouseRouter');

const deleteCard = require('./routers/deleteCardRoutes');

const oneItemRouter = require('./routers/moreRouters');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

// check();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    name: 'sid',
    store: new FileStore(),
    secret: SESSION_SECRET ?? 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        httpOnly: true,
    },
};

app.use(session(sessionConfig));

app.use('/login', loginRoutes);
app.use('/register', regRoutes);
app.use('/', mainRouter);

app.use('/apart', apartRouter);
app.use('/flat', flatRoutes);
app.use('/house', houseRouter);

app.use('/form/flat', flatFormRouter);
app.use('/form/house', houseFormRouter);
app.use('/form/apartment', apartFormRouter);

app.use('/apart/update', taskUpdateApartRouter);
app.use('/flat/update', taskUpdateFlatRouter);
app.use('/house/update', taskUpdateHouseRouter);

app.use('/', deleteCard);

app.use('/home', oneItemRouter);

app.get('/logout', async (req, res) => {
    console.log(req.query);
    try {
        if (req.session.newUser || req.session.admin) {
            req.session.destroy(() => {
                res.clearCookie('sid');
                res.redirect('/');
            });
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        res.send(`Error ------> ${error}`);
    }
});

app.get('/contact', (req, res) => {
    renderTemplate(Contact, {}, res);
});

app.listen(PORT ?? 3000, () => {
    console.log(`Сервер поднят на ${PORT} порту!`);
});
