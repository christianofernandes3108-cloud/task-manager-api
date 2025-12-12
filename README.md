# Task Manager API

A production-ready RESTful backend API built with Node.js, Express, and MongoDB. The service provides secure user authentication and full CRUD operations for managing tasks. Designed with clean architecture principles, modular components, and scalable best practices.

## Features

### User Management
- User registration and login
- Password hashing with bcrypt
- Secure, stateless authentication using JWT
- Role-based and authenticated route protection

### Task Management
- Create, read, update, and delete tasks
- User-specific task ownership
- Query filters (e.g., completed, date filters)

### Architecture & Code Quality
- MVC folder structure (controllers, models, middleware, routes)
- Reusable authentication middleware
- Environment variable configuration using `.env`
- Modular and maintainable codebase

## Tech Stack

**Backend:** Node.js, Express  
**Database:** MongoDB, Mongoose  
**Auth:** JWT, bcrypt  
**Utility:** dotenv, nodemon  

## Project Structure

```
├── config/
│   └── db.js
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── taskModel.js
│   └── userModel.js
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
├── server.js
└── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the server (development)

```bash
npm run dev
```

### Run in production mode

```bash
npm start
```

## API Endpoints (Summary)

### User

| Method | Endpoint             | Description |
|--------|-----------------------|-------------|
| POST   | /api/users/register  | Create a new user |
| POST   | /api/users/login     | Login user and return JWT |

### Tasks

| Method | Endpoint        | Description |
|--------|------------------|-------------|
| GET    | /api/tasks      | Get all tasks for logged-in user |
| POST   | /api/tasks      | Create new task |
| PATCH  | /api/tasks/:id  | Update task |
| DELETE | /api/tasks/:id  | Delete task |

## Future Improvements

- Add pagination and sorting
- Swagger/OpenAPI documentation
- Unit and integration tests
- Deployment workflow with CI/CD

## License

MIT License.
