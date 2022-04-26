import mongoose from 'mongoose';
import express from 'express';
import session from 'express-session';
const app = express();
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect('mongodb://localhost:27017/webdev');

import cors from 'cors';
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());

import tuitsController
    from "./controllers/tuits-controller.js";
tuitsController(app);
import userController
    from "./controllers/user-controller.js";
userController(app);
import authController
    from "./controllers/auth-controller.js";
authController(app);

app.listen(4000);