require("dotenv").config(); // Load environment variables from .env file

const Sequelize = require("sequelize");

// Create a Sequelize instance based on the environment variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Connect to a remote database using JAWSDB_URL
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost", // Database host (if not using JAWSDB_URL)
        dialect: "mysql", // Dialect for MySQL
        dialectOptions: {
          decimalNumbers: true, // Enable support for decimal numbers
        },
      }
    );

module.exports = sequelize; // Export the configured Sequelize instance
