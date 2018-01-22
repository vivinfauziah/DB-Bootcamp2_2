const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/transaction')
const Schema = mongoose.Schema

var transactionSchema = new Schema({
    idCustomer : String,
    tanggal : String,
    kodeRumah : String
})

var Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction