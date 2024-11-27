const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
    res.render("index");
})

router.get("/userlogin", function(req, res){
    res.render("login");
})
module.exports = router;