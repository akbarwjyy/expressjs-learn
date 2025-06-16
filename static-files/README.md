# Express.js Static Files Example

This is a simple Express.js project demonstrating how to serve static files using the `express.static` middleware.

## Project Structure

```
static-files/
├── app.js
├── package.json
└── public/
    ├── index.html
    └── style.css
```

## Description

This project shows how to serve static files (like HTML, CSS, images, and JavaScript files) using Express.js. The static files are served from the `public` directory.

## Features

- Uses Express.js framework
- Serves static files from the `public` directory
- Includes a simple HTML page with CSS styling
- Runs on port 3000

## Installation

1. Make sure you have Node.js installed on your system
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

## How It Works

The application uses `express.static()` middleware to serve static files from the `public` directory. Any files placed in the `public` directory will be accessible through the browser.

For example:

- `public/index.html` is accessible at `http://localhost:3000/index.html` or simply `http://localhost:3000`
- `public/style.css` is accessible at `http://localhost:3000/style.css`

## Dependencies

- Express.js - Fast, unopinionated, minimalist web framework for Node.js

## License

This project is for educational purposes and is open for learning and experimentation.
