# Subscription Management Backend

This backend for the subscription management application is built using Node.js and MongoDB, following a clean architecture approach. It includes functionalities such as creating and managing subscription groups, adding members to groups, and tracking payments. The backend uses Express for handling HTTP requests and Mongoose for interacting with MongoDB.

## Features

- **User Management**: CRUD operations for user accounts
- **Group Management**: Create and manage subscription groups
- **Member Management**: Add and manage group members
- **Payment Tracking**: Record and track payments related to group members

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/subscription-management-backend.git
```
2. Navigate to the project directory:

```bash
cd subscription-management-backend
```

3. Install the dependencies:

```bash
npm install
```

4. Create a .env file in the root directory and add the following environment variables:

```bash
MONGO_URI=mongodb://your_mongo_db_uri
PORT=5000
```
Running the Application

1. Start the server:

```bash
npm start
```
2. The backend server will be running at http://localhost:5000.

## API Endpoints
**User Endpoints**
- Create User: `POST /api/users`
- Get All Users: `GET /api/users`
- Get User By ID: `GET /api/users/:userId`
- Update User: `PUT /api/users/:userId`
- Delete User: `DELETE /api/users/:userId`

**Group Endpoints**
- Create Group: `POST /api/groups`
- Get All Groups: `GET /api/groups`
- Get Group By ID: `GET /api/groups/:groupId`
- Update Group: `PUT /api/groups/:groupId`
- Delete Group: `DELETE /api/groups/:groupId`
## Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature-branch-name
5. Open a pull request.
