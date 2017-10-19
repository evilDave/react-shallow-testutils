'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findWithTypeMatching;

var _findAllWithTypeMatching = require('./find-all-with-type-matching');

var _findAllWithTypeMatching2 = _interopRequireDefault(_findAllWithTypeMatching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find only one element in the tree with a `type` prop that matches `type`
 * that also satisfies the function `test`.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @param  {Function} test  the test for each component
 * @return {Array}                all matching elements
 */
function findWithTypeMatching(root, type, test) {
  var found = (0, _findAllWithTypeMatching2.default)(root, type, test);

  if (found.length !== 1) {
    throw new Error('Did not find exactly one match for type: ' + type + ' matching test');
  }

  return found[0];
}