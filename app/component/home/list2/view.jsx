import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './toProps';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { value, onIncreaseClick } = this.props;
    console.log(value)
    return (
      <div className="a">
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>getValue</button>
        </div>
        homeList2
      </div>
    );
  }
}

Container.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
