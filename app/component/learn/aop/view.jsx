import React from 'react';
import Proptypes from 'prop-types';

function withOnChange(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '123',
      };
    }
    onChange = (e) => {
      this.setState({
        name: e.target.value,
      });
    };
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange,
        },
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

const NameInput = props => {
  return <input {...props.name} />
};

// class View extends React.Component {
//   render() {
//     return (
//       <div>aop</div>
//     );
//   }
// }
//
//
// View.propTypes = {
// };

export default withOnChange(NameInput);
