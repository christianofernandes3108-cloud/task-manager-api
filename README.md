# Task Manager API

## Overview
A RESTful Task Manager API built using Node.js and Express, following MVC architecture principles. The API allows authenticated users to manage tasks securely with full CRUD functionality and role-based access control.

This project focuses on backend development best practices, authentication, and clean API design.

---

## Tech Stack
- Node.js
- Express
- MongoDB
- JSON Web Tokens (JWT)

---

## Architecture
- MVC (Model-View-Controller) architecture
- RESTful API design
- Environment-based configuration
- Middleware for authentication and authorization

---

## Features
- User registration and login
- JWT-based authentication
- Role-based access control
- Create, read, update, and delete tasks
- Secure API endpoints

---

## API Endpoints

Authentication:
- POST /auth/register – Register a new user
- POST /auth/login – Authenticate user and return JWT

Tasks:
- GET /tasks – Retrieve all tasks for authenticated user
- POST /tasks – Create a new task
- PUT /tasks/:id – Update an existing task
- DELETE /tasks/:id – Delete a task

---

## Setup Instructions

Prerequisites:
- Node.js installed
- MongoDB installed or MongoDB Atlas account

Installation:
1. Clone the repository:
   git clone https://github.com/christianofernandes3108-cloud/task-manager-api.git

2. Navigate to the project directory:
   cd task-manager-api

3. Install dependencies:
   npm install

4. Create a `.env` file with the following variables:
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_jwt_secret  
   PORT=5000  

5. Start the development server:
   npm run dev

---

## Future Improvements
- Pagination and filtering
- API testing with Jest
- Task prioritization and due dates
- Deployment to a cloud hosting platform

---

## Author
Christiano Fernandes  
Junior Backend / Full-Stack Developer