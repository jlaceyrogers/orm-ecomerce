// Import the required models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Define associations between models

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id", // The foreign key in the Product table
  onDelete: "CASCADE", // If the associated category is deleted, delete related products
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id", // The foreign key in the Product table
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate table for the many-to-many relationship
  foreignKey: "product_id", // The foreign key in the ProductTag table that refers to products
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediate table for the many-to-many relationship
  foreignKey: "tag_id", // The foreign key in the ProductTag table that refers to tags
});

// Export all models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
