import * as tuitsDao from "./tuits/tuits-dao.js";
import authController
    from "./auth-controller.js";
import * as usersDao from "./users/users-dao.js";

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.get('/api/tuits', findAllUserTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const findAllUserTuits = async (req, res) => {
    const handle = req.params.handle;
    const tuits = await tuitsDao.findAllUserTuits(handle)
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(newTuit);
}


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

export default tuitsController;