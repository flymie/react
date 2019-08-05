import React from 'react';
import Proptypes from 'prop-types';

class Cat extends React.Component {
  render() {
    const { mouse } = this.props;
    return (
      <div
        style={{
          position: 'absolute', width: '40px', height: '40px', backgroundColor: 'red', left: mouse.x - 10, top: mouse.y - 10,
        }}
      />
    );
  }
}


Cat.propTypes = {
  mouse: Proptypes.shape(),
};

export default Cat;
