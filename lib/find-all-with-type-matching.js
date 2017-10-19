'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findAllWithTypeMatching;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findAll = require('./find-all');

var _findAll2 = _interopRequireDefault(_findAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Finds all elements in the tree with a `type` prop that matches `type`
 * that also satisfy the function `test`.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @param  {Function} test  the test for each component
 * @return {Array}                all matching elements
 */
function findAllWithTypeMatching(tree, type, test) {
  return (0, _findAll2.default)(tree, function (component) {
    if (_react2.default.isValidElement(component)) {
      return component.type != null && component.type === type && test(component);
    }

    return false;
  });
}