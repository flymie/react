import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $api from 'appPath/config/http';
// import { mapStateToProps, mapDispatchToProps } from './toProps';
import { increaseAction } from './action';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // $api.get('/api/v2/music/search', { q: 'k' }).then((result) => {
    //   console.log('async')
    //   this.setState({
    //     count: result.count,
    //   });
    // });
    const ths = this;
    async function getMusic() {
      const result = await $api.get('/api/v2/music/search', { q: 'k' });
      if (result.code === 0) {
        ths.setState({
          count: result.count,
        });
      } else {
        console.log('这里使用了豆瓣的接口，没有code值');
        ths.setState({
          count: result.count,
        });
      }
    }
    getMusic();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const arr = [1, 2, 3];
    const { count } = this.state;
    const { value, dispatch } = this.props;
    return (
      <div className="a">
        <div>
          <span>{value}</span>
          <button
            onClick={() => {
              dispatch(increaseAction({
                test: 'test',
              }));
            }}
          >
            Increase
          </button>
        </div>
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

Container.propTypes = {
  value: PropTypes.number.isRequired,
  // onIncreaseClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => Object.assign({}, state.homeList);
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Container);
