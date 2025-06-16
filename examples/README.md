# Express.js Examples Project

A comprehensive example project demonstrating various Express.js features including middleware, modular routing, and error handling.

## Project Structure

```
examples/
├── app.js
├── package.json
├── middleware/
│   └── logger.js
└── routes/
    └── user.js
```

## Features

- Custom middleware implementation
- Modular routing
- Error handling middleware
- JSON parsing
- RESTful API endpoints
- Organized project structure

## Components

### Main Application (`app.js`)

- Server configuration
- Middleware registration
- Route integration
- Error handling setup
- Server initialization

### Custom Middleware (`middleware/logger.js`)

- Request logging middleware
- Demonstrates middleware creation
- Logs HTTP method and URL for each request

### User Routes (`routes/user.js`)

- Modular routing example
- RESTful endpoints for user resources
- Dummy data handling
- Parameter-based routing

## Available Endpoints

| Method | Path       | Description    | Response           |
| ------ | ---------- | -------------- | ------------------ |
| GET    | /          | Welcome page   | Welcome message    |
| GET    | /users     | List all users | Array of users     |
| GET    | /users/:id | Get user by ID | Single user or 404 |

## Installation

1. Ensure you have Node.js installed
2. Clone this repository
3. Navigate to the project directory
4. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node app.js
   ```
2. The server will start on port 3000
3. Access the API endpoints:
   - http://localhost:3000/
   - http://localhost:3000/users
   - http://localhost:3000/users/1

## Testing the API

### Using cURL

1. Get welcome message:

   ```bash
   curl http://localhost:3000/
   ```

2. Get all users:

   ```bash
   curl http://localhost:3000/users
   ```

3. Get specific user:
   ```bash
   curl http://localhost:3000/users/1
   ```

## Key Learning Points

### 1. Middleware

- Custom middleware creation
- Middleware chaining
- Built-in middleware usage (express.json())

### 2. Routing

- Modular route handling
- Router middleware
- Parameter handling
- Response methods

### 3. Error Handling

- Global error handling middleware
- Error catching and processing
- HTTP status codes

### 4. Project Structure

- Modular code organization
- Separation of concerns
- Clean code practices

## Dependencies

- Express.js - Web framework for Node.js

## Code Examples

### Custom Middleware

```javascript
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

### Modular Routing

```javascript
const router = express.Router();
router.get("/", (req, res) => {
  res.json(users);
});
```

### Error Handling

```javascript
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});
```

## Best Practices Demonstrated

1. Modular code organization
2. Middleware for cross-cutting concerns
3. Proper error handling
4. RESTful API design
5. Clean and maintainable code structure

## License

This project is for educational purposes and is open for learning and experimentation.

## Further Reading

- [Express.js Documentation](https://expressjs.com/)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Error Handling](https://expressjs.com/en/guide/error-handling.html)
