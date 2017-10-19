import findAllWithTypeMatching from './find-all-with-type-matching';

/**
 * Find only one element in the tree with a `type` prop that matches `type`
 * that also satisfies the function `test`.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @param  {Function} test  the test for each component
 * @return {Array}                all matching elements
 */
export default function findWithTypeMatching(root, type, test) {
  const found = findAllWithTypeMatching(root, type, test);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly one match for type: ${type} matching test`);
  }

  return found[0];
}
