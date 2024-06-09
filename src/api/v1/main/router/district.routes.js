const { Router } = require("express");
const RequestHelper = require("../../helper/request.hepler");
const DistrictCTL = require("../controller/dt.ctl");
const router = Router();

router.get("/:idDistrict/communes", DistrictCTL.getAllCommunes);

class DistrictRT {
  static router = router;
}

module.exports = DistrictRT;
