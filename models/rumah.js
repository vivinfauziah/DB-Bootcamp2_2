const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/house')
const Schema = mongoose.Schema

var houseSchema = new Schema({
    kodeRumah : String,
    alamatRumah : String,
    tipe : String,
    harga : Number,
    terjual : Number
})

var House = mongoose.model('house', houseSchema)

module.exports = House