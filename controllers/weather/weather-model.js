const mongoose = require('mongoose')
const weatherSchema = require('./weather-schema')
const weatherModel = mongoose.model(
    'WeatherModel', weatherSchema
)
module.exports = weatherModel