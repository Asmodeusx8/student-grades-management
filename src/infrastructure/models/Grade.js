const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Grade = sequelize.define('Grade', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  subject: { type: DataTypes.STRING, allowNull: false },
  grade: { type: DataTypes.FLOAT, allowNull: false },
});

Grade.belongsTo(Student, { foreignKey: 'studentId' });
module.exports = Grade;
