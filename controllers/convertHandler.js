function ConvertHandler() {

  this.getNum = function (input) {
    let result = !isNaN(+input);

    return result;
  };

  this.getUnit = function (input) {
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (!initUnit) {
      initUnit = initNum.toLowerCase();
    }


    if (initUnit === 'L') {
      result = initNum * galToL;
    } else if (initUnit === 'kg') {
      result = initNum * lbsToKg;
    } else if (initUnit === "km") {
      result = initNum * miToKm;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
