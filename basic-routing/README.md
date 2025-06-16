# Express.js Basic Routing Example

A demonstration project showing how to implement basic routing in Express.js using different HTTP methods.

## Project Structure

```
basic-routing/
├── app.js
└── package.json
```

## Description

This project demonstrates the fundamental concepts of routing in Express.js. It shows how to handle different HTTP methods (GET, POST, PUT, DELETE) and create multiple endpoints in an Express.js application.

## Features

- Basic Express.js server setup
- Multiple route handlers
- Different HTTP methods implementation:
  - GET
  - POST
  - PUT
  - DELETE
- Simple response handling

## Available Routes

| Method | Path    | Description             | Response         |
| ------ | ------- | ----------------------- | ---------------- |
| GET    | /       | Home page               | "Hello World!"   |
| GET    | /about  | About page              | "About Page"     |
| POST   | /submit | Handle form submissions | "Form Submitted" |
| PUT    | /update | Handle update requests  | "Data Updated"   |
| DELETE | /delete | Handle delete requests  | "Data Deleted"   |

## Installation

1. Ensure you have Node.js installed on your system
2. Clone this repository or download the files
3. Navigate to the project directory
4. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node app.js
   ```
2. The server will start on port 3000
3. You can test the routes using:
   - A web browser for GET requests
   - Postman or similar tools for POST, PUT, and DELETE requests
   - cURL commands from the terminal

## Testing the Routes

### Using cURL

1. GET request:

   ```bash
   curl http://localhost:3000/
   curl http://localhost:3000/about
   ```

2. POST request:

   ```bash
   curl -X POST http://localhost:3000/submit
   ```

3. PUT request:

   ```bash
   curl -X PUT http://localhost:3000/update
   ```

4. DELETE request:
   ```bash
   curl -X DELETE http://localhost:3000/delete
   ```

## Code Explanation

```javascript
// Creating routes for different HTTP methods
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", (req, res) => {
  res.send("Form Submitted");
});

// And so on for PUT and DELETE...
```

Each route:

- Uses the appropriate HTTP method function (`get`, `post`, `put`, `delete`)
- Specifies a path as the first argument
- Provides a callback function to handle the request and response

## Learning Points

- Different HTTP methods and their purposes
- Route handling in Express.js
- Request and response objects
- Basic API endpoint creation
- RESTful routing conventions

## Dependencies

- Express.js - Fast, unopinionated, minimalist web framework for Node.js

## License

This project is for educational purposes and is open for learning and experimentation.

## Further Reading

- [Express.js Routing Guide](https://expressjs.com/en/guide/routing.html)
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [RESTful API Design](https://restfulapi.net/)
