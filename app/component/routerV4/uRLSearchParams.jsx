import React from 'react';
import Proptypes from 'prop-types';

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
    const searchParams = new URLSearchParams(search);
    return (
      <div>
        <h1>整理一些关于react-router v4 的一些使用</h1>
        <h2>URLSearchParams 使用有兼容问题</h2>
        <p>
          {`传回的参数id=${params.id}`}
        </p>
        <div>
          使用URLSearchParams.get(key)获取
          <p>
            a:
            { searchParams.get('a') }
          </p>
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
