import { increaseAction } from './action';

export const mapStateToProps = state => Object.assign({}, state.homeList);

// Map Redux actions to component props
export const mapDispatchToProps = dispatch => ({
  onIncreaseClick: data => dispatch(increaseAction(data)),
});
