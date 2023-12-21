const request = require('supertest');
const app = require('../server.js'); // Adjust the relative path based on your project structure

const companiesdata = require('../models/companies.js');

describe('Companies API', () => {
  it('GET /companies returns a 200 ok response if companies are found', async () => {
    const response = await request(app).get('/companies');
    const allcompanies = [
    { id: 1, name: 'Company A', location: 'Location A' },
    { id: 2, name: 'Company B', location: 'Location B' },
    ]
    if(response.status===200){
      expect(response.status).toBe(200);
      expect(response.body).toEqual(companiesdata);
    }
    else{
      expect(response.status).toBe(500);
      expect(response.data.error).toEqual("Internal Server Error")
    }
  });

  it('POST /auth to login a user with a correct username and password', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ user: 'VinaySY', pwd:'Vinay@123' });
    expect(response.status).toEqual(202);
    expect(response.body.message).toEqual("Login successful");
  });

  it('POST /auth with incorrect password ', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ user: 'VinaySY', pwd:'Vinay@1234' });
    
    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Unauthorized user");
  });

  
});
