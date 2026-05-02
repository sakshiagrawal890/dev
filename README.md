# Book Management APIs

A RESTful API for managing books built with Node.js, Express, MongoDB, and Mongoose.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:3001`

## API Endpoints

### Base URL
```
http://localhost:3001/api/books
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /books | Create a new book |
| GET | /books | Get all books |
| GET | /books/:id | Get a book by ID |
| PUT | /books/:id | Update a book by ID |
| DELETE | /books/:id | Delete a book by ID |
| GET | /books/available | Get all available books |

## Book Schema

```javascript
{
  title: String,        // Required
  author: String,      // Required
  price: Number,       // Required, must be > 0
  available: Boolean   // Default: true
}
```

## Request Examples

### Create a Book
```bash
curl -X POST http://localhost:3001/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","price":10.99}'
```

### Get All Books
```bash
curl http://localhost:3001/api/books
```

### Get a Book by ID
```bash
curl http://localhost:3001/api/books/:id
```

### Update a Book
```bash
curl -X PUT http://localhost:3001/api/books/:id \
  -H "Content-Type: application/json" \
  -d '{"price":12.99}'
```

### Delete a Book
```bash
curl -X DELETE http://localhost:3001/api/books/:id
```

### Get Available Books
```bash
curl http://localhost:3001/api/books/available
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Status Codes

- `200` - OK (successful GET/PUT/DELETE)
- `201` - Created (successful POST)
- `400` - Bad Request (validation errors)
- `404` - Not Found (book not found)
- `500` - Internal Server Error
# dev
