const express = require('express');
const bodyParser = require('body-parser');
const getcompanies = require("./routes/getcompanies");
const userlogin = require('./routes/auth.js');
const createcompany = require('./routes/createcompany.js');

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Root endpoint handler
app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /companies to get a list of companies.');
});

// API endpoint to retrieve a list of companies
app.use('/companies',getcompanies);

// API endpoint for login
app.use("/auth", userlogin);

// API endpoint to create a new company (only accessible to authenticated 'admin' users)
app.use("/createcompany",createcompany);

app.post('/createcompany', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  // Continue with creating the company if parameters are present
  // ...

  res.json({ message: 'New company created!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
