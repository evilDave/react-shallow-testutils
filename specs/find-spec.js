import {find} from '../src';
import {createRenderer} from 'react-test-renderer/shallow';
import React from 'react';

class TestWithMatcher extends React.Component {
  render() {
    return (
      <div className='test-class'>
        <span />
        <div className='test-class1' />
        <div className='test-class2' />
        <div className='test-class2' />
        <div className='test-class3' />
      </div>
    );
  }
}

describe('`find`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithMatcher />);
  });

  it('should find exactly one matching `div` component', function() {
    expect(() => find(this.tree, (c) => c.props && c.props.className === 'test-class1')).not.toThrow();
  });

  it('should not find exactly one matching `div` component', function() {
    expect(() => find(this.tree, (c) => c.props && c.props.className === 'test-class2')).toThrow();
  });

  it('should not find any matching `div` component', function() {
    expect(() => find(this.tree, (c) => c.props && c.props.className === 'test-class4')).toThrow();
  });

});
