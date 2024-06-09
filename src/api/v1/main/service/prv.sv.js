const PRVETT = require("../data/entity/province.ett");

class PRVSV {
  static async getAllProvinces() {
    return await PRVETT.findAll();
  }
}

module.exports = PRVSV;
