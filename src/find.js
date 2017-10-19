import findAll from './find-all';

/**
 * Find only one element in the tree that satisfies the function `test`.
 *
 * @param  {ReactElement}   tree the tree to traverse
 * @param  {Function} test  the test for each component
 * @return {Array}          the elements that satisfied `test`
 */
export default function find(root, test) {
  const found = findAll(root, test);

  if (found.length !== 1) {
    throw new Error('Did not find exactly one matching test');
  }

  return found[0];
}
