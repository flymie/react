import { all } from 'redux-saga/effects';
import homeList from './component/home/list/saga';
import homeList2 from './component/home/list2/saga';


export default function* rootSaga() {
  yield all([
    homeList(),
    homeList2(),
  ]);
}
