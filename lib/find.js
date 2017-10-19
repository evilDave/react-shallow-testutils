'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _findAll = require('./find-all');

var _findAll2 = _interopRequireDefault(_findAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find only one element in the tree that satisfies the function `test`.
 *
 * @param  {ReactElement}   tree the tree to traverse
 * @param  {Function} test  the test for each component
 * @return {Array}          the elements that satisfied `test`
 */
function find(root, test) {
  var found = (0, _findAll2.default)(root, test);

  if (found.length !== 1) {
    throw new Error('Did not find exactly one matching test');
  }

  return found[0];
}