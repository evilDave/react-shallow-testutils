import React from 'react';
import findAll from './find-all';

/**
 * Finds all elements in the tree with a `type` prop that matches `type`
 * that also satisfy the function `test`.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @param  {Function} test  the test for each component
 * @return {Array}                all matching elements
 */
export default function findAllWithTypeMatching(tree, type, test) {
  return findAll(tree, component => {
    if (React.isValidElement(component)) {
      return component.type != null && component.type === type && test(component);
    }

    return false;
  });
}
