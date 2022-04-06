import posts from "./tuits/tuits.js";
import userController from "./user-controller.js";
let tuits = posts;

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.postedBy = {};
    newTuit.postedBy.username = "elmo";
    newTuit.topic = "Web Development";
    newTuit.liked = false;
    newTuit.disliked = false;
    newTuit.verified = false;
    newTuit.handle = "Elmo";
    //newTuit["avatar-image"] = "../../../images/react-blue.png";
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.comments = 0;
    newTuit.retuits = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}


const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

export default tuitsController;
