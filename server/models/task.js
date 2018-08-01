'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING(100),
    description: DataTypes.STRING,
    status: DataTypes.STRING(20),
  }, {});
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};