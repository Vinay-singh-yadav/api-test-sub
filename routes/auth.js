const express = require("express");
const router = express.Router();

const users = require('../models/users.js');

router.post("/", async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); //Unauthorized 

    // evaluate password 
    let match = false;
    if(pwd === foundUser.password) match = true;
    if (match) {
        const data = {
            user : user,
            message : "Login successful"
        }
        res.status(202).json(data);
    } else {
        res.status(401).json({message : "Unauthorized user"});
    }
});

module.exports = router;
