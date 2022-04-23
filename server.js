import mongoose from 'mongoose';
import express from 'express';
import session from 'express-session';
const app = express();
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect('mongodb://localhost:27017/cs4550-sp22');

import cors from 'cors';
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
const sess = {
    secret: 'keyboard cat', // TODO: move this to environment variable
    cookie: {}
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))

import tuitsController
    from "./controllers/tuits-controller.js";
tuitsController(app);
import userController
    from "./controllers/user-controller.js";
userController(app);

app.listen(4000);