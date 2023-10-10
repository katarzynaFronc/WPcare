"use strict";
const exports = {};
Object.defineProperty(exports, "__esModule", { value: true });

var testFunction = function (a, b) {
  var sum = a + b;
  console.log(sum);
};
const _testFunction = testFunction;
export { _testFunction as testFunction };
(0, _testFunction)(1, 3);
