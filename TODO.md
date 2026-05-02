# Book Management APIs - Task Plan

## Project Overview
Create Book Management APIs using Node.js, Express, MongoDB, and Mongoose.

## Database
- MongoDB local instance at mongodb://localhost:27017/bookshelf

## Book Schema
```
{
  title: String (required),
  author: String (required),
  price: Number (required, must be > 0),
  available: Boolean (default: true)
}
```

## APIs to Create

### Required APIs
1. POST /books - Create a new book
2. GET /books - Get all books
3. GET /books/:id - Get a book by ID
4. PUT /books/:id - Update a book by ID
5. DELETE /books/:id - Delete a book by ID

### Bonus API
6. GET /books/available - Get all available books

## Constraints
- All fields required except available
- Default value of available should be true
- price must be greater than 0
- Return proper HTTP status codes

## Status Codes to Use
- 200 - OK (successful GET/PUT/DELETE)
- 201 - Created (successful POST)
- 400 - Bad Request (validation errors)
- 404 - Not Found (book not found)
- 500 - Internal Server Error

## Implementation Steps
1. Initialize package.json with npm init -y
2. Install dependencies (express, mongoose, dotenv, cors)
3. Create project structure
4. Create server.js - main entry point
5. Create Book model (models/Book.js)
6. Create routes (routes/bookRoutes.js)
7. Create controller (controllers/bookController.js)
8. Create .env file for configuration
9. Test APIs using execute_command

## Project Structure
```
book-management/
├── package.json
├── server.js
├── .env
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
└── controllers/
    └── bookController.js
```

## Files to be Created
1. package.json
2. server.js
3. .env
4. models/Book.js
5. routes/bookRoutes.js
6. controllers/bookController.js
