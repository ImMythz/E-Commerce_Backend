const { Model, DataTypes } = require('sequelize');

// Connects to our DB
const sequelize = require('../config/connection.js');

// Creates a class for a Category
class Category extends Model {}

// Defines our Category model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true
    },
     category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Exports the Category class which allows us to use this throughout our project
module.exports = Category;
