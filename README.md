# Express.js Learning Project

A comprehensive collection of Express.js examples demonstrating various features and concepts of the Express.js framework. This project contains multiple sub-projects, each focusing on different aspects of Express.js development.

## Project Structure

```
expressjs-learn/
├── basic-routing/      # Basic routing examples
├── examples/           # Advanced Express.js features
├── generator-app/      # Express generator created application
├── hello-word/        # Simple Hello World application
└── static-files/      # Static file serving example
```

## Sub-Projects Overview

### 1. Basic Routing (`basic-routing/`)

Demonstrates the fundamental concepts of routing in Express.js:

- Different HTTP methods (GET, POST, PUT, DELETE)
- Multiple route handlers
- Basic response handling
- [View Basic Routing Documentation](basic-routing/README.md)

### 2. Examples (`examples/`)

Advanced Express.js features and best practices:

- Custom middleware implementation
- Modular routing
- Error handling
- Project structure organization
- [View Examples Documentation](examples/README.md)

### 3. Generator App (`generator-app/`)

Full-featured Express.js application created using Express Generator:

- MVC-like structure
- Jade templating
- Error handling
- Static file serving
- Multiple middleware integration
- [View Generator App Documentation](generator-app/README.md)

### 4. Hello World (`hello-word/`)

Simple starter Express.js application:

- Basic server setup
- Single route handling
- Server initialization
- [View Hello World Documentation](hello-word/README.md)

### 5. Static Files (`static-files/`)

Example of serving static files with Express.js:

- Static middleware usage
- Public directory structure
- HTML and CSS serving
- [View Static Files Documentation](static-files/README.md)

## Learning Path

1. Start with **Hello World** to understand basic Express.js setup
2. Move to **Basic Routing** to learn about HTTP methods and routing
3. Explore **Static Files** to understand serving static content
4. Study **Examples** for advanced concepts and best practices
5. Examine **Generator App** for a complete application structure

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)
- Basic JavaScript knowledge
- Understanding of HTTP concepts

## Getting Started

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Navigate to any sub-project:

   ```bash
   cd expressjs-learn/[project-name]
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   node app.js
   # or
   npm start  # for generator-app
   ```

## Key Concepts Covered

1. **Routing**

   - Basic routes
   - HTTP methods
   - Route parameters
   - Query strings
   - Modular routing

2. **Middleware**

   - Built-in middleware
   - Custom middleware
   - Error handling middleware
   - Static file middleware

3. **Templates and Views**

   - Jade/Pug templating
   - Layout management
   - View rendering

4. **Static Files**

   - Serving static content
   - Public directory organization
   - Asset management

5. **Error Handling**

   - Error middleware
   - HTTP error management
   - Custom error pages

6. **Project Structure**
   - Directory organization
   - Code modularization
   - Best practices

## Common Dependencies

- `express` - Web framework
- `jade/pug` - Template engine
- `morgan` - HTTP request logger
- `cookie-parser` - Cookie parsing
- `debug` - Debugging utility
- `http-errors` - HTTP error creation

## Development Tools

- VS Code (recommended)
- Postman (for API testing)
- Browser DevTools
- Terminal/Command Prompt

## Best Practices Demonstrated

1. Modular code organization
2. Proper error handling
3. Security considerations
4. Performance optimization
5. Code reusability
6. Clean code principles

## Additional Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)
- [MDN Web Docs - Express/Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

## Contributing

Feel free to contribute to this learning project by:

1. Creating new examples
2. Improving existing examples
3. Adding better documentation
4. Fixing bugs or issues

## License

This project is for educational purposes and is open for learning and experimentation.

## Author

Akbar Wijaya

## Acknowledgments

- Express.js team and contributors
- Node.js community
- All contributors to this learning project
