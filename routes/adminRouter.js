const express = require('express');
const router = express.Router();
const path = require('path');
const addUser = require('../models/manage-user');
const addRole = require('../models/manage-roles');
const userModel = require('../models/user-model');

router.get("/",async function(req, res){
    let user = await addUser.find();
    let role = await addRole.find();
    res.render("adminPannel", {user, role});
})

router.get("/adduser",async function(req, res){
    let role = await addRole.find();
    res.render("addUser", {role});
});

router.post("/adduserform",async function(req, res){
    let {name, email, role} = req.body;
    let user = await addUser.create({
        name,
        email,
        role
    })
    res.redirect("/");
})

router.get("/addrole", function(req, res){
    res.render("addRole");
});

router.post("/addroleform",async function(req, res){
    let {rolename, permission} = req.body;
    let role = await addRole.create({
        rolename,
        permission
    })
    res.redirect("/");
})

router.get("/users",async function(req, res){
    let users = await userModel.find();
    res.render("peopleUsers", {users});
})

module.exports = router;