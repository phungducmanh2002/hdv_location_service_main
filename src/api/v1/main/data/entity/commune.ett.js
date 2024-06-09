const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");

class CommuneETT extends Model {}

CommuneETT.init(
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
    idDistrict: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "commune",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = CommuneETT;
