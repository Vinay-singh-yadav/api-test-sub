# Company API

Author: Vinay Singh Yadav

---

Welcome to the Company API, a versatile tool for efficiently managing company data. This API, built using the robust Express.js framework, offers essential features such as retrieving an extensive list of companies, user authentication, and creating new companies. Whether you're a developer integrating this API into a larger system or an administrator overseeing company data, this documentation will guide you through the setup and usage of the Company API.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Overview

The Company API is designed to offer a seamless experience for managing companies, providing key features that make it a valuable asset for various applications:

1. **List of Companies:** Retrieve a comprehensive list of companies registered in the system, facilitating easy access to essential company information.

2. **User Authentication:** Ensure secure access to the API by authenticating users through a well-defined login system. This feature enhances the overall security of the API, protecting sensitive company data.

3. **Create New Companies:** Allow privileged users, particularly administrators, to create new companies, thereby enabling the dynamic expansion of the company database.

This API serves as a robust foundation for more complex systems, offering a flexible and scalable solution for company data management.

## Getting Started

To kickstart your journey with the Company API, follow these simple steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/company-api.git
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

    Continue with the installation of the dependencies.

3. **Start the Server:**

    ```bash
    npm start
    ```

    The API will be accessible at `http://localhost:8000`.

4. **API Configuration:**

    Before running the API, you may need to configure environment variables. Create a `.env` file in the root of your project and add the following:

    ```env
    PORT=8000
    ```

    Adjust the `PORT` value as needed.

5. **Start the Server:**

    Start the API server with the configured environment variables:

    ```bash
    npm start
    ```

    The API will be accessible at `http://localhost:8000`.

## API Endpoints

 ### 1. `GET /companies`

Retrieve a list of all registered companies, allowing users to explore and analyze the existing corporate landscape.

#### Example Response:

```json
[
  { "id": 1, "name": "Company A", "location": "Location A" },
  { "id": 2, "name": "Company B", "location": "Location B" }
]
```
### 2. `POST /auth`

Authenticate a user and obtain a valuable authentication token, a key for accessing authorized endpoints securely.

#### Example Request:

```json
{
  "user": "VinaySY",
  "pwd": "Vinay@123"
}
```
#### Example Response:

```json
{
    "user": "VinaySY",
    "message": "Login successful"
}
```

### 3. `POST /createcompany`

Create a new company, an action reserved for admin users to facilitate the seamless addition of new entities to the database.

#### Example Request:

```json
{
  "user": "admin-username",
  "name": "New Company",
  "location": "New Location"
}
```
#### Example Response:

```json
{
  "success": "Company created successfully"
}
```

## Testing

The Company API includes a comprehensive set of test cases to ensure its functionality and reliability. You can run these tests using the following command:

```bash
npx jest
```
### Test Cases Overview

- **Empty Array Handling (GET /companies):**
  - *Description:* Verifies that the API returns a 200 OK response with an empty object when there are no companies.
  - *Test Command:* `it('GET /companies returns a 200 ok response with an empty object if no companies are found', async () => {...});`

- **Missing Name or Location (POST /createcompany):**
  - *Description:* Validates that the API returns a 400 Bad Request response if the name or location is missing when creating a company.
  - *Test Command:* `it('POST /createcompany returns a 400 Bad Request response if name or location is missing', async () => {...});`

- **Non-Admin User Creation (POST /createcompany):**
  - *Description:* Ensures that non-admin users receive a 401 Unauthorized response when attempting to create a company.
  - *Test Command:* `it('POST /createcompany returns a 401 Unauthorized response for non-admin users', async () => {...});`

- **Successful Company Retrieval (GET /companies):**
  - *Description:* Validates that the API returns a 200 OK response with the correct list of companies.
  - *Test Command:* `it('GET /companies returns a 200 ok response if companies are found', async () => {...});`

- **User Authentication (POST /auth):**
  - *Description:* Tests user authentication by checking if a correct username and password result in a 202 Accepted response.
  - *Test Command:* `it('POST /auth to login a user with a correct username and password', async () => {...});`

- **Unauthorized User Access (POST /auth):**
  - *Description:* Verifies that an unauthorized user is denied access when providing an incorrect password.
  - *Test Command:* `it('POST /auth with incorrect password', async () => {...});`


## Project Structure 

Understanding the structure of the project is essential for developers aiming to contribute or customize the API. Key components include:

- **server.js:** The main server file.
- **routes/:** Houses route handlers for different endpoints.
- **models/:** Contains data models for users, companies, etc.
- **tests/:** Includes test cases for the API.

In the `routes/` directory, you'll find route handlers that define the behavior for each API endpoint. The `models/` directory holds data models representing entities like users and companies, facilitating data management within the application. The `tests/` directory includes test cases to ensure the reliability and functionality of the API.

Understanding these components will provide developers with insights into the organization and functionality of the Company API.

## Dependencies 

The Company API relies on several dependencies to deliver its functionality. Key dependencies include:

- [Express](https://expressjs.com/): A powerful web application framework for Node.js.
- [Body-parser](https://www.npmjs.com/package/body-parser): Middleware to parse JSON requests effectively.
- [Supertest](https://www.npmjs.com/package/supertest): A library for testing HTTP assertions, ensuring the reliability of the API.

These dependencies are crucial for the core functionality and testing procedures of the Company API. Express provides a robust framework for building web applications, while Body-parser aids in parsing JSON requests efficiently. Supertest is instrumental in testing HTTP assertions, ensuring the API's reliability and correctness.

---

🚀 Happy coding! Feel free to contribute, report issues, or reach out for any questions. Let's make this project even better together.

📧 Contact: Vinayrao.735@gmail.com
🔗 Connect with me on LinkedIn: [Vinay Singh Yadav](https://www.linkedin.com/in/vinay-singh-yadav-181baa205/)

Thank you for using the Company API!


