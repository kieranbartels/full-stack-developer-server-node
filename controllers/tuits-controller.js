import * as tuitsDao from "./tuits/tuits-dao.js";

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.postedBy = {};
    newTuit.postedBy.username = "Elmo";
    newTuit.topic = "Web Development";
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.verified = false;
    newTuit.handle = "elmo";
    newTuit["avatar-image"] = "../../../images/elmo.jpg";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0;
    newTuit.retuits = 0;
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