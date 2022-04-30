const weatherDao = require('../weather/weather-dao')

const findWeatherById = async (req, res) => {
    const id = req.params.id
    const weather = await weatherDao.findWeatherById(id)
    res.json(weather)
}

module.exports = (app) => {
    app.get('/api/weather/:id', findWeatherById)
}