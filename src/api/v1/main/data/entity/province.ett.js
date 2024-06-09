const SQLZConfig = require("../../../config/sequelize.config");
const { DataTypes, Model } = require("sequelize");
const DataHelper = require("../../../helper/data.helper");

class PRVETT extends Model {}

PRVETT.init(
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
  },
  {
    sequelize: SQLZConfig.SQLZInstance,
    freezeTableName: true,
    tableName: "province",
    indexes: [
      {
        unique: true,
        fields: ["name"],
      },
    ],
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PRVETT;
