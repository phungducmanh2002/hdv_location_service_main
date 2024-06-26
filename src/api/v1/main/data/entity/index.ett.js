const SQLZConfig = require("../../../config/sequelize.config");
const FileHelper = require("../../../helper/file.helper");
const CommuneETT = require("./commune.ett");
const DistrictETT = require("./district.ett");
const PRVETT = require("./province.ett");
const path = require("path");
const fs = require("fs").promises;

PRVETT.hasMany(DistrictETT, { foreignKey: "idProvince" });
DistrictETT.belongsTo(PRVETT, { foreignKey: "idProvince" });

DistrictETT.hasMany(CommuneETT, { foreignKey: "idDistrict" });
CommuneETT.belongsTo(DistrictETT, { foreignKey: "idDistrict" });

const provinceFilePath = path.join(__dirname, "data", "province.json");
const districtFilePath = path.join(__dirname, "data", "district.json");
const communeFilePath = path.join(__dirname, "data", "commune.json");

console.log(provinceFilePath);

const DB_GEN = FileHelper.getEnv("DB_GEN");
class IDXEtt {
  static async do() {
    if (DB_GEN == 1) {
      console.log("create table ...");
      await SQLZConfig.SQLZInstance.sync({ force: true });
      console.log("create table finish!");

      console.log("create province data...");
      await IDXEtt.insertPRVData();
      console.log("create province finish!");

      console.log("create district data...");
      await IDXEtt.inserDTData();
      console.log("create district data finish!");

      console.log("create commune data...");
      await IDXEtt.insertCMNData();
      console.log("create commune data finish!");
    }
  }
  static async insertPRVData() {
    const data = await fs.readFile(provinceFilePath, "utf8");
    const datajson = JSON.parse(data);
    await PRVETT.bulkCreate(datajson);
  }
  static async inserDTData() {
    const data = await fs.readFile(districtFilePath, "utf8");
    const datajson = JSON.parse(data);
    await DistrictETT.bulkCreate(datajson);
  }
  static async insertCMNData() {
    const data = await fs.readFile(communeFilePath, "utf8");
    const datajson = JSON.parse(data);
    await CommuneETT.bulkCreate(datajson);
  }
}

module.exports = IDXEtt;
