const express = require("express");
const Transaction = require("../models/transaksi");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Employee.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});
    
router.get("/", (req, res) => {
    
    Employee.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});
    
router.post("/", (req, res) => {
            
    let newObj = new Transaction({
        idCustomer : req.body.kodeRumah,
        tanggal : req.body.alamatRumah,
        kodeRumah : req.body.tipe
    });
            
    newObj.save((error) => {
        if (error) {
            res.status(500).send(error);
        }
        else{
            res.json(newObj);
        }
    });
});
    
router.delete("/:id", (req, res) => {
    
    Employee.findByIdAndRemove(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json({ message : "Transaction deleted" })
        }
    });    
});
    
router.put("/", (req, res) => {
        
    let newObj = {
        idCustomer : req.body.kodeRumah,
        tanggal : req.body.alamatRumah,
        kodeRumah : req.body.tipe
    };
    
    Employee.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else {
            res.status(500).json({ message : "Transaction updated" })
        }
    });
});

module.exports = (function(){
    return router;
})();