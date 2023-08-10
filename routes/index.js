// Import the 'express' library and create a router instance
const router = require("express").Router();

// Import the 'apiRoutes' module, which likely contains other route configurations
const apiRoutes = require("./api");

// Use the 'apiRoutes' module for routes starting with '/api'
router.use("/api", apiRoutes);

// If none of the routes match, respond with a "Wrong Route!" message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Export the router to be used in other parts of the application
module.exports = router;
