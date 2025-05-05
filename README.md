<!-- # Authentication & Authorization Integration (Node.js + Flutter)
This section explains how to connect your Node.js backend with a Flutter frontend using JWT-based authentication.

Backend Setup (Node.js)
Ensure your backend includes the following:

Routes:

POST /api/auth/register – Register new users

POST /api/auth/login – Login and receive JWT token


Environment variables in a .env file:

env

Edit
PORT=5000
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection
Start the server:

npm install
npm run dev
Flutter Setup & API Integration
Install required packages:

yaml

dependencies:
  http: ^0.13.4
  shared_preferences: ^2.0.15
Set your base URL:


Testing
Use Postman or Flutter app to:

Register a user

Log in and copy the token -->