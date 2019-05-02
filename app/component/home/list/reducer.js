const defaultState = {
  value: 0,
};
const home = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        value: state.value + 1,
      });
    default:
      return state;
  }
};
export default home;
