import React from "react";

class Container extends React.Component {
		componentDidMount() {
		}

		componentDidUpdate() {

		}
		componentWillUnmount() {
		}
		render() {
				const arr = [1,2,3];
				return (
						<div className='a'>
								<h1 className='a_b'>hello, world!</h1>
								<p className='background'>test speed</p>
								<img src={require('Images/userImg240.png')} />
								{
										arr.map( (v, index) => (
												<p key={index}>{v}</p>
										))
								}
						</div>
				);
		}
}

export default Container;