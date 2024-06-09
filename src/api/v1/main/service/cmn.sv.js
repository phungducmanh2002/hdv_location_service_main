const CommuneETT = require("../data/entity/commune.ett");

class CMNSV {
  static async getAllCommunesByDistrict(idDistrict) {
    return await CommuneETT.findAll({ where: { idDistrict: idDistrict } });
  }
}

module.exports = CMNSV;
