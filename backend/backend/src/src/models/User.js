const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(100) },
  email: { type: DataTypes.STRING(120), unique: true, allowNull: false },
  passwordHash: { type: DataTypes.STRING(255), allowNull: false },
  role: { type: DataTypes.ENUM("USER", "ADMIN"), defaultValue: "USER" },
  preferences: { type: DataTypes.JSON, allowNull: true },
  budgetWeekly: { type: DataTypes.INTEGER, allowNull: true },
  dietType: { type: DataTypes.STRING(50), allowNull: true } // vegan, low_salt...
}, {
  tableName: "users",
  timestamps: true
});

module.exports = User;
