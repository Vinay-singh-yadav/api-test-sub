const express = require("express");
const router = express.Router();

const users = require('../models/users.js');

router.post("/", async (req, res) => {
    const { user,name,location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ error: 'Name and location are required' });
      }

    const foundUser = users.find(person => person.username === user);

    const role = foundUser.role;

    if(role!=='admin'){
      return  res.status(401).json({error : "The user must be an admin to create a company"});
    }

    res.json({ 'success': `User is an admin and successfully created a company` });

});

module.exports = router;
