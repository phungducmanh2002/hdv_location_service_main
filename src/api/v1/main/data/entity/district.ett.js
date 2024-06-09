const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");

class DistrictETT extends Model {}

DistrictETT.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    idProvince: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "district",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = DistrictETT;
