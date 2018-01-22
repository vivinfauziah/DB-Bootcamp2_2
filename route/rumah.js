const express = require("express");
const House = require("../models/rumah");
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
            
    let newObj = new House({
        kodeRumah : req.body.kodeRumah,
        alamatRumah : req.body.alamatRumah,
        tipe : req.body.tipe,
        harga : req.body.harga,
        terjual : req.body.terjual
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
            res.json({ message : "House deleted" })
        }
    });    
});
    
router.put("/", (req, res) => {
        
    let newObj = {
        kodeRumah : req.body.kodeRumah,
        alamatRumah : req.body.alamatRumah,
        tipe : req.body.tipe,
        harga : req.body.harga,
        terjual : req.body.terjual
    };
    
    Employee.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else {
            res.status(500).json({ message : "Data updated" })
        }
    });
});

module.exports = (function(){
    return router;
})();