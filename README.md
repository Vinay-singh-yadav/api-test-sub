# Company API

Welcome to the Company API, a versatile tool for efficiently managing company data. This API, built using the robust Express.js framework, offers essential features such as retrieving an extensive list of companies, user authentication, and creating new companies. Whether you're a developer integrating this API into a larger system or an administrator overseeing company data, this documentation will guide you through the setup and usage of the Company API.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

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
  "user": "your-username",
  "pwd": "your-password"
}
```
#### Example Response:

```json
{
  "token": "your-authentication-token"
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

Ensure the robustness of the Company API by running tests using the following command:

```bash
npx jest
```

## Project Structure (continued)

Understanding the structure of the project is essential for developers aiming to contribute or customize the API. Key components include:

- **server.js:** The main server file.
- **routes/:** Houses route handlers for different endpoints.
- **models/:** Contains data models for users, companies, etc.
- **tests/:** Includes test cases for the API.

In the `routes/` directory, you'll find route handlers that define the behavior for each API endpoint. The `models/` directory holds data models representing entities like users and companies, facilitating data management within the application. The `tests/` directory includes test cases to ensure the reliability and functionality of the API.

Understanding these components will provide developers with insights into the organization and functionality of the Company API.

