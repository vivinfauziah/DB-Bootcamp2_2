const express = require("express");
const User = require("../models/user")
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
        idCustomer : req.body.idCustomer,
        nama : req.body.nama,
        noHp : req.body.noHp,
        email : req.body.email,
        alamat : req.body.alamat
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
        idCustomer : req.body.idCustomer,
        nama : req.body.nama,
        noHp : req.body.noHp,
        email : req.body.email,
        alamat : req.body.alamat
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