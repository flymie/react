import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from './middleware/logger';
import rootSaga from './rootSagas';
import reducers from './reducers';

let defaultStore;
if (typeof window !== 'undefined') {
  defaultStore = window.__STORE__ || {};
}
const rootReducer = combineReducers(reducers);

const middlewares = [];
const sagaMiddleware = createSagaMiddleware(rootSaga);
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(
  middlewareEnhancer,
);

const store = createStore(rootReducer, defaultStore, composedEnhancers);
sagaMiddleware.run(rootSaga);
export default store;
