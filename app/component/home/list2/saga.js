import { takeLatest, put } from 'redux-saga/effects';
import $api from '../../../config/http';
import * as types from './type';
import { changeData } from './action';

function* initFn(action) {
  const result = yield $api.get('https://api.douban.com/v2/music/search', action.data);
  // const result = yield $api.get('/api/v2/music/search', action.data);
  if (result.code === 0) {
    yield put(changeData({
      value: result.count,
    }));
  } else {
    yield put(changeData({
      value: result.count,
    }));
  }
};

function* getMusic(action) {
  const result = yield $api.get('/api/v2/music/search', action.data);
  if (result.code === 0) {
    yield put(changeData({
      value: result.count,
    }));
  } else {
    console.log('else');
    yield put(changeData({
      value: result.count,
    }));
  }
};

function* main() {
  yield takeLatest(types.init, initFn);
  yield takeLatest(types.increase, getMusic);
}

export default main;
