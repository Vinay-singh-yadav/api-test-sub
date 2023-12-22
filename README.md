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

 ###1. `GET /companies`

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


