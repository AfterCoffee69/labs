const sequelize = require('../db')
const { DataTypes } = require('sequelize')


const Doctor = sequelize.define('Doctor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DoctorCategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });


const DoctorCategory = sequelize.define('DoctorCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Schedule = sequelize.define('Schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Room: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DoctorCategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

DoctorCategory.hasMany(Doctor, { foreignKey: 'DoctorCategory_id' });
Doctor.belongsTo(DoctorCategory, { foreignKey: 'DoctorCategory_id' });

DoctorCategory.hasMany(Schedule, { foreignKey: 'DoctorCategory_id' });
Schedule.belongsTo(DoctorCategory, { foreignKey: 'DoctorCategory_id' });


module.exports = {
    Doctor,
    DoctorCategory,
    Schedule,
    User
};