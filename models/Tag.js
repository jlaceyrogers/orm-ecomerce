// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");

// Import the database connection instance from config.js
const sequelize = require("../config/connection.js");

// Define the Tag model by extending Sequelize's Model class
class Tag extends Model {}

// Initialize the fields and rules for the Tag model
Tag.init(
  {
    // Define the 'id' field as an auto-incrementing integer primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'tag_name' field as a string
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // Connects this model to the sequelize instance
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Uses underscored naming (e.g., tag_name) for fields
    modelName: "tag", // Sets the model name to 'tag'
  }
);

// Export the Tag model
module.exports = Tag;
