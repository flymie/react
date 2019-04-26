import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $api from 'appPath/config/http';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    $api.get('/api/v2/music/search', { q: 'k' }).then((result) => {
      this.setState({
        count: result.count,
      });
    });
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const arr = [1, 2, 3];
    const { count } = this.state;
    return (
      <div className="a">
        <p>{`count: ${count}`}</p>
        <h1 className="a_b">hello, world!</h1>
        <p className="background">test speed</p>
        <img src={require('Images/userImg240.png')} alt="" />
        {
          arr.map((v, index) => (
            <p key={`${index + 1}`}>{v}</p>
          ))
        }
        <Link to={`/routerV4/1?a=${encodeURIComponent('4&&-.2')}&b=${encodeURIComponent('5=&')}`}>传入param,query</Link>
        <p>
          <Link to={'/uRLSearchParams/1?a=4&&-.2)}&b=5=&'}>通过URLSearchParams解析查询的字段</Link>
        </p>
      </div>
    );
  }
}

export default Container;
