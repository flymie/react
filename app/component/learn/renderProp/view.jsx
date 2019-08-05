import React from 'react';
import Proptypes from 'prop-types';
import Mouse from './mouse';
import Cat from './cat';

class View extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse kkk={mouse => (
          <Cat mouse={mouse} />
        )}
        />
      </div>
    );
  }
}


View.propTypes = {
};

export default View;
