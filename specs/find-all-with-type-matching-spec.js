import {findAllWithTypeMatching} from '../src';
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

describe('`findAllWithTypeMatching`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithTypes />);
  });

  it('should find five `div` components', function() {
    const found = findAllWithTypeMatching(this.tree, 'div', () => true );

    expect(found.length).toBe(5);
  });

  it('should find no `button` components', function() {
    const found = findAllWithTypeMatching(this.tree, 'button', () => true );

    expect(found.length).toBe(0);
  });

  it('should find 2 matching `div` components', function() {
    const found = findAllWithTypeMatching(this.tree, 'div', (c) => c.props.className === 'test-class2' );

    expect(found.length).toBe(2);
  });

  it('should find 0 matching `div` components', function() {
    const found = findAllWithTypeMatching(this.tree, 'div', (c) => c.props.className === 'test-class4' );

    expect(found.length).toBe(0);
  });

  it('should find 0 matching `button` components', function() {
    const found = findAllWithTypeMatching(this.tree, 'button', (c) => c.props.className === 'test-class2' );

    expect(found.length).toBe(0);
  });

});
