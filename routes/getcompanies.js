const express = require('express');
const router = express.Router();
const companies = require('../models/companies.js');

router.get('/', (req, res) => {
  try {
    console.log("companies is ",companies);
    res.json(companies);
  } catch (error) {
    console.error('Error fetching Companies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
