'use strict';
module.exports = (sequelize, DataTypes) => {
  var History = sequelize.define('History', {
    taskId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  History.associate = function (models) {
    // associations can be defined here
  };
  return History;
};