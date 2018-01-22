const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/user')
const Schema = mongoose.Schema

var userSchema = new Schema({
    idCustomer : String,
    nama : String,
    noHp : String,
    email : String,
    alamat : String
})

var User = mongoose.model('User', userSchema)

module.exports = User