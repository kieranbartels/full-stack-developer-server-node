import * as usersDao from "./users/users-dao.js";
const users = [];

const signup = async (req, res) => {
    const credentials = req.body;
    const existingUser = await usersDao.findUserByEmail(credentials.email)
    if(existingUser) {
        return res.sendStatus(403)
    } else {
        const newUser = await usersDao.createUser(credentials)
        req.session['profile'] = newUser
        res.json(newUser)
    }
}

const login = async (req, res) => {
    const credentials = req.body;
    const profile = await usersDao
        .findUserByCredentials(credentials.email, credentials.password)
    if (profile) {
        req.session['profile'] = profile;
        res.json(profile);
        return;
    }
    res.sendStatus(403);
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}

const profile = (req, res) => {
    const profile = req.session['profile']
    if(profile) {
        res.json(profile)
    } else {
        res.sendStatus(503)
    }
}

const findUserByHandle = async (req, res) => {
    console.log("here")
    const userHandle = req.params.handle
    const user = await usersDao.findUserByHandle(userHandle)
    res.json(user)
}

const updateUser = async (req, res) => {
    const userId = req.params.id
    const updatedUser = req.body
    const status = await usersDao.updateUser(
        userId,
        updatedUser
    )
    req.session['profile'] = status;
    res.json(updatedUser)
}

const authController = (app) => {
    app.post('/api/signup', signup);
    app.post('/api/profile', profile);
    app.post('/api/signin', login);
    app.post('/api/logout', logout);
    app.put('/api/updateUser/:id', updateUser);
    app.get('/api/userinfo/:handle', findUserByHandle);
}

export default authController;