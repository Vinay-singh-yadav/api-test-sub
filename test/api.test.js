const request = require('supertest');
const app = require('../server.js'); // Adjust the relative path based on your project structure

const companiesdata = require('../models/companies.js');

describe('Companies API', () => {
   
// edge case - handling empty array of companies
  it('GET /companies returns a 200 ok response with an empty object if no companies are found', async () => {
    const emptyCompaniesData = [];
    const response = await request(app).get(emptyCompaniesData);
  
    if (response.status === 200) {
      // Check if the response body is an array or an object
      const responseData = Array.isArray(response.body) ? response.body : [response.body];
  
      expect(response.status).toBe(200);
      expect(responseData).toEqual([{}]);
    } else {
      expect(response.status).toBe(500);
      expect(response.body.error).toEqual('Internal Server Error');
    }
  });
    

  // handling creation of company with mission name and location
  it('POST /createcompany returns a 400 Bad Request response if name or location is missing', async () => {
    const response = await request(app)
      .post('/createcompany')
      .send({});
  
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual('Name and location are required');
  });
  
  
  // creation of company by non-admin user
  it('POST /createcompany returns a 401 Unauthorized response for non-admin users', async () => {
  const response = await request(app)
    .post('/createcompany')
    .send({ user: 'ShrivardhanY', name: 'NewCompany', location: 'NewLocation' });
  console.log(response);
  expect(response.status).toBe(401);
  expect(response.body.error).toEqual('The user must be an admin to create a company');
}); 

  // all companies fetched correctly
  it('GET /companies returns a 200 ok response if companies are found', async () => {
    const response = await request(app).get('/companies');
    
    if(response.status===200){
      expect(response.status).toBe(200);
      expect(response.body).toEqual(companiesdata);
    }
    else{
      expect(response.status).toBe(500);
      expect(response.data.error).toEqual("Internal Server Error")
    }
  });
  
  // user is authorised as user and password are correct
  it('POST /auth to login a user with a correct username and password', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ user: 'VinaySY', pwd:'Vinay@123' });
    expect(response.status).toEqual(202);
    expect(response.body.message).toEqual("Login successful");
  });
  

  // user denied access becuase it was unauthorised
  it('POST /auth with incorrect password ', async () => {
    const response = await request(app)
      .post('/auth')
      .send({ user: 'VinaySY', pwd:'Vinay@1234' });
    
    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Unauthorized user");
  });

  
});
