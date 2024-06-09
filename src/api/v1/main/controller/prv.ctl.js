const RES = require("../payload/RES");
const DTSV = require("../service/dt.sv");
const PRVSV = require("../service/prv.sv");

class ProvinceCTL {
  static getAllDistricts = [
    async (req, res, next) => {
      try {
        const idProvince = req.params.idProvince;
        const districts = await DTSV.getAllDistrictsByProvince(idProvince);
        res.json(RES.Oke.setData(districts));
      } catch (error) {
        next(error);
      }
    },
  ];
  static getAllProvinces = [
    async (req, res, next) => {
      try {
        const provinces = await PRVSV.getAllProvinces();
        res.json(RES.Oke.setData(provinces));
      } catch (error) {
        next(error);
      }
    },
  ];
}

module.exports = ProvinceCTL;
