const moviesModel = require('./movies-model')

const findWeatherByID = async (id) => {
    const movie = await moviesModel.findOne({id})
    return movie
}

module.exports = {
    likeMovie, findMovieByImdbID
}