// Import the 'express' library
const express = require("express");

// Import the database connection instance from config.js
const sequelize = require("./config/connection");

// Import the routes module
const routes = require("./routes");

// Create an instance of the Express app
const app = express();

// Define the port to listen on (default: 3001)
const PORT = process.env.PORT || 3001;

// Middleware: Parse incoming JSON data
app.use(express.json());

// Middleware: Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the imported routes
app.use(routes);

// Synchronize the Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  // Start the Express server once the synchronization is complete
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
