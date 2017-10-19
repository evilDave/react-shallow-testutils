import {findWithTypeMatching} from '../src';
import {createRenderer} from 'react-test-renderer/shallow';
import React from 'react';

class TestWithTypes extends React.Component {
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

describe('`findWithTypeMatching`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithTypes />);
  });

  it('should find `span` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'span', () => true)).not.toThrow();
  });

  it('should not find exactly one `div` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'div', () => true)).toThrow();
  });

  it('should not find `button` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'button', () => true)).toThrow();
  });

  it('should find exactly one matching `div` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'div', (c) => c.props.className === 'test-class1')).not.toThrow();
  });

  it('should not find exactly one matching `div` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'div', (c) => c.props.className === 'test-class2')).toThrow();
  });

  it('should not find any matching `div` component', function() {
    expect(() => findWithTypeMatching(this.tree, 'div', (c) => c.props.className === 'test-class4')).toThrow();
  });

});
