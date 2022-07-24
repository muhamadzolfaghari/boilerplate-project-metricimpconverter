const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  test('equal', () => {
    assert.equal(convertHandler.getNum(2), true);
    assert.equal(convertHandler.convert(1, "L"), 3.78541);
  })
});