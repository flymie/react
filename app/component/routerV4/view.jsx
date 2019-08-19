import React from 'react';
import Proptypes from 'prop-types';
import { searchToYouWantFn } from '../../lib/public';

class RouterV4 extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { match: { params } } = this.props;
    const { location: { search } } = this.props;
    const searchObj = searchToYouWantFn(search);
    return (
      <div>
        <h1>整理一些关于react-router v4 的一些使用</h1>
        <p>
          {`传回的参数id=${params.id}`}
        </p>
        <div>
          {
            Object.keys(searchObj).map((v, key) => (
              <p key={`${key + 1}`}>{`${v}: ${searchObj[v]}`}</p>
            ))
          }
        </div>
      </div>
    );
  }
}

RouterV4.propTypes = {
  match: Proptypes.shape(),
  location: Proptypes.shape(),
};

export default RouterV4;
