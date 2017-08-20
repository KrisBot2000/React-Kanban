'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    task: DataTypes.STRING,
    priority: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};