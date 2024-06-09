const { Router } = require("express");
const RequestHelper = require("../../helper/request.hepler");
const ProvinceCTL = require("../controller/prv.ctl");
const router = Router();

router.get("", ProvinceCTL.getAllProvinces);
router.get("/:idProvince/districts", ProvinceCTL.getAllDistricts);

class ProvinceRT {
  static router = router;
}

module.exports = ProvinceRT;
