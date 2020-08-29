const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true }
})

module.exports = Card = mongoose.model('card', cardSchema)
