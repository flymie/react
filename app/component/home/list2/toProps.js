import $api from 'appPath/config/http';
import { changeData } from './action';

export const mapStateToProps = state => ({
  value: state.homeList2.value,
});

// Map Redux actions to component props
export const mapDispatchToProps = dispatch => ({
  onIncreaseClick: async () => {
    const result = await $api.get('/api/v2/music/search', { q: 'k' });
    if (result.code === 0) {
      dispatch(changeData({
        value: result.count,
      }));
    } else {
      dispatch(changeData({
        value: result.count,
      }));
    }
  },
});
