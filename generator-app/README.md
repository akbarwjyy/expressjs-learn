# Express Generator Application

This is a full-featured Express.js application created using the Express Generator tool. It demonstrates a structured approach to building web applications with Express.js, including routing, views, error handling, and middleware integration.

## Project Structure

```
generator-app/
├── app.js
├── package.json
├── bin/
│   └── www
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
└── views/
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

## Features

- MVC-like structure with separate routes and views
- Jade (now Pug) templating engine
- Static file serving
- Error handling middleware
- Request logging with Morgan
- Cookie parsing
- JSON and URL-encoded body parsing
- Development and production error handling modes

## Dependencies

- `express` - Web framework
- `jade` - Template engine
- `morgan` - HTTP request logger
- `cookie-parser` - Cookie parsing middleware
- `debug` - Debugging utility
- `http-errors` - HTTP error creation utility

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
   npm start
   ```
   Or in debug mode:
   ```
   DEBUG=generator-app:* npm start
   ```
2. Open your web browser and visit:
   ```
   http://localhost:3000
   ```

## Application Structure

### App Entry Point (`app.js`)

- Sets up the Express application
- Configures middleware
- Sets up view engine
- Handles routing
- Implements error handling

### Routes

- `routes/index.js` - Handles main page routing
- `routes/users.js` - Handles user-related routes

### Views

- Uses Jade templating engine
- `views/layout.jade` - Main template layout
- `views/index.jade` - Home page template
- `views/error.jade` - Error page template

### Public Directory

Serves static files:

- `public/images/` - Image files
- `public/javascripts/` - Client-side JavaScript
- `public/stylesheets/` - CSS files

## Middleware Stack

1. Morgan Logger (`morgan`)
2. JSON Parser (`express.json`)
3. URL-encoded Parser (`express.urlencoded`)
4. Cookie Parser (`cookie-parser`)
5. Static File Server (`express.static`)
6. Application Routes
7. 404 Error Handler
8. Global Error Handler

## Error Handling

The application includes comprehensive error handling:

- 404 errors for undefined routes
- Development mode with full error details
- Production mode with limited error information
- Custom error pages using the error template

## Development vs Production

- Development mode shows detailed error messages
- Production mode shows user-friendly error pages
- Configure using the `NODE_ENV` environment variable

## License

This project is for educational purposes and is open for learning and experimentation.

## Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [Jade Template Engine](http://jade-lang.com/)
- [Express Generator Guide](https://expressjs.com/en/starter/generator.html)
