# Express.js Hello World Example

A simple Express.js project demonstrating the basics of creating a web server and handling HTTP requests.

## Project Structure

```
hello-word/
├── app.js
└── package.json
```

## Description

This is a minimal Express.js application that serves a "Hello World!" message when accessing the root endpoint. It's a perfect starting point for learning Express.js and understanding the basics of web servers.

## Features

- Basic Express.js server setup
- Simple route handling
- Response sending
- Running on port 3000

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
2. Open your web browser and visit:
   ```
   http://localhost:3000
   ```
3. You should see the "Hello World!" message

## How It Works

The application:

1. Creates an Express application instance
2. Sets up a route handler for the root path ("/")
3. Sends "Hello World!" as the response when the root path is accessed
4. Listens for incoming requests on port 3000

## Code Explanation

```javascript
const express = require("express"); // Import Express.js
const app = express(); // Create Express application
const port = 3000; // Define port number

// Route handler for root path
app.get("/", (req, res) => {
  res.send("Hello World!"); // Send response
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## Dependencies

- Express.js - Fast, unopinionated, minimalist web framework for Node.js

## Learning Points

- Setting up an Express.js server
- Creating route handlers
- Sending responses
- Starting a server on a specific port

## License

This project is for educational purposes and is open for learning and experimentation.
