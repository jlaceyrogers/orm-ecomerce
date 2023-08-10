// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");

// Import the database connection instance from config.js
const sequelize = require("../config/connection");

// Define the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Initialize the fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the 'id' field as an auto-incrementing integer primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'product_id' field as an integer with a foreign key reference
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product", // References the 'product' model (table)
        key: "id", // References the 'id' field in the 'product' model
      },
    },
    // Define the 'tag_id' field as an integer with a foreign key reference
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag", // References the 'tag' model (table)
        key: "id", // References the 'id' field in the 'tag' model
      },
    },
  },
  {
    sequelize, // Connects this model to the sequelize instance
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Uses underscored naming (e.g., product_id) for fields
    modelName: "product_tag", // Sets the model name to 'product_tag'
  }
);

// Export the ProductTag model
module.exports = ProductTag;
