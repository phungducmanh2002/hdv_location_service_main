const DistrictETT = require("../data/entity/district.ett");

class DTSV {
  static async getAllDistrictsByProvince(idProvince) {
    return await DistrictETT.findAll({ where: { idProvince: idProvince } });
  }
}

module.exports = DTSV;
