const { Router } = require("express");
const RES = require("../payload/RES");
const EXMDW = require("../../middleware/ex.mdw");
const ProvinceRT = require("./province.routes");
const DistrictRT = require("./district.routes");
const router = Router();

router.use("/provinces", ProvinceRT.router);
router.use("/districts", DistrictRT.router);
router.use(EXMDW.handleErr);

class IDXRouter {
  static router = router;
}

module.exports = IDXRouter;
