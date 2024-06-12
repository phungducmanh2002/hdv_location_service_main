const path = require("path");

class LCTDT {
  static getPath() {
    const p = path.resolve(__dirname);
    console.log("\n\n", p, "\n\n");
    return p;
  }
}

module.exports = LCTDT;
