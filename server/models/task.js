'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(100)
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};