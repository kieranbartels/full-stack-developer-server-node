const mongoose = require('mongoose')
const weatherSchema = mongoose.Schema({
    city: String,
}, {collection: "weather"})
module.exports = weatherSchema