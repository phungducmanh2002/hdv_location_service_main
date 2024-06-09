const RES = require("../payload/RES");
const CMNSV = require("../service/cmn.sv");
const DTSV = require("../service/dt.sv");

class DistrictCTL {
  static getAllCommunes = [
    async (req, res, next) => {
      try {
        const idDistrict = req.params.idDistrict;
        const communes = await CMNSV.getAllCommunesByDistrict(idDistrict);
        res.json(RES.Oke.setData(communes));
      } catch (error) {
        next(error);
      }
    },
  ];
}

module.exports = DistrictCTL;
