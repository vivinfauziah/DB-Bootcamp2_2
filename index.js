const express = require("express")
const bodyParser = require("body-parser")
const rumahRoutes = require("./route/rumah");
const transaksiRoutes = require("./route/transaksi");
const userRoutes = require("./route/user");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use("/api/rumah", rumahRoutes)
app.use("/api/transaksi", transaksiRoutes)
app.use("/api/user", userRoutes)

app.listen(3000)