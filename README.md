# Assignment Portal API

## Overview

This is a backend API for an **Assignment Portal**. It provides functionalities for users to register, login, and upload assignments. Admins can register, login, and view, accept, or reject assignments. The system helps to manage assignments and tracks user activity in a simple and effective manner.

## Features

- **User Registration**: Users can register by providing a username and password.
- **User Login**: Users can log in using their credentials.
- **Upload Assignment**: Users can upload assignments to the portal.
- **Admin Registration and Login**: Admins can register and log in to access the assignment management functionalities.
- **View Assignments**: Admins can view all uploaded assignments.
- **Accept or Reject Assignments**: Admins can accept or reject assignments as part of the review process.

## Technologies Used

- **Node.js** for the server.
- **Express.js** for routing.
- **MongoDB** as the database.
- **Postman** collection for API testing.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB
- npm (Node Package Manager)

### Steps to Set Up Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/assignment-portal-api.git
   cd assignment-portal-api


2. Install Dependencies: Run the following command to install required dependencies:

bash
Copy code
npm install
3. Set Up MongoDB:

Make sure MongoDB is running locally or use a cloud database such as MongoDB Atlas.
To start MongoDB locally, use the command:
bash
Copy code
mongod --dbpath /path/to/your/data


4. Start the Server: Once the dependencies are installed and MongoDB is set up, start the API server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
User Endpoints
User Registration:

URL: POST /api/users/register
Body:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
User Login:

URL: POST /api/users/login
Body:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Upload Assignment:

URL: POST /api/users/upload
Body:
json
Copy code
{
  "userId": "60b9a1b629aa982ea1d6f6c0",
  "task": "Complete the project report",
  "admin": "60b9a1b629aa982ea1d6f6c1"
}
Admin Endpoints
Admin Registration:

URL: POST /api/admins/register
Body:
json
Copy code
{
  "username": "admin1",
  "password": "adminpassword123"
}
Admin Login:

URL: POST /api/admins/login
Body:
json
Copy code
{
  "username": "admin1",
  "password": "adminpassword123"
}
View Assignments:

URL: GET /api/admins/assignments
Query Params: adminId=<admin_id>
Accept Assignment:

URL: POST /api/admins/assignments/:id/accept
Reject Assignment:

URL: POST /api/admins/assignments/:id/reject
Postman Collection
To test the API endpoints, you can use the provided Postman collection. You can import it directly into Postman to test each endpoint.

License
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

markdown
Copy code

### Notes:

1. Replace `https://github.com/yourusername/assignment-portal-api.git` with your actual GitHub repository URL.
2. Replace the Postman collection link (`https://www.getpostman.com/collections/yourcollectionid`) with your actual Postman collection URL if applicable.
3. Add your name under the **Copyright** section in the license (`Your Name`).
