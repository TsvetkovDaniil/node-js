const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
})

// User - название модели
// userSchema - модель объекта (интерфейс)
module.exports = mongoose.model('User', userSchema)
