import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/routerV4/1?a=${encodeURIComponent('4&&-.2')}&b=${encodeURIComponent('5=&')}`}>传入param,query</Link>
      </div>
    );
  }
}

export default Container;
