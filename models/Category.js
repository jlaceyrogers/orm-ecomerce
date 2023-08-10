const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js"); // Import the Sequelize instance

class Category extends Model {} // Define the Category model class

Category.init(
  {
    // Define the attributes of the Category model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Use the configured Sequelize instance
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscores instead of camelCase in column names
    modelName: "category", // Specify the model name in singular form
  }
);

module.exports = Category; // Export the Category model class
