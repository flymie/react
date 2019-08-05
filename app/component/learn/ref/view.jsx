import React from 'react';
import Proptypes from 'prop-types';
import RefInput from './refInput';

const ref = React.createRef();

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ref.current.focus();
  }

  render() {
    return (
      <div>
        {
          [].length && 123
        }
        <RefInput ref={ref} />
      </div>
    );
  }
}


View.propTypes = {
};

export default View;
