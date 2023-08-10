// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");

// Import the database connection instance from config.js
const sequelize = require("../config/connection");

// Define the Product model by extending Sequelize's Model class
class Product extends Model {}

// Initialize the fields and rules for the Product model
Product.init(
  {
    // Define the 'id' field as an auto-incrementing integer primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'product_name' field as a non-null string
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the 'price' field as a decimal number with constraints
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allows up to 10 digits with 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true, // Ensures the value is a decimal number
      },
    },
    // Define the 'stock' field as an integer with default value and constraints
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default value if not provided
      validate: {
        isNumeric: true, // Ensures the value is a numeric value
      },
    },
    // Define the 'category_id' field as an integer with a foreign key reference
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can be null
      references: {
        model: "category", // References the 'category' model (table)
        key: "id", // References the 'id' field in the 'category' model
      },
    },
  },
  {
    sequelize, // Connects this model to the sequelize instance
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Uses underscored naming (e.g., product_name) for fields
    modelName: "product", // Sets the model name to 'product'
  }
);

// Export the Product model
module.exports = Product;
