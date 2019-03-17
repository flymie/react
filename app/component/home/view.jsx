import React from 'react';
import { Route, Link } from 'react-router-dom';
import routerV4 from '../routerV4/view';

class Container extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const arr = [1, 2, 3];
    return (
      <div className="a">
        <h1 className="a_b">hello, world!</h1>
        <p className="background">test speed</p>
        <img src={require('Images/userImg240.png')} alt="" />
        {
          arr.map((v, index) => (
            <p key={`${index + 1}`}>{v}</p>
          ))
        }
        <Link to="/routerV4/1">传入param,query</Link>
      </div>
    );
  }
}

export default Container;
