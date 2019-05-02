import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(
  middlewareEnhancer,
);

const store = createStore(rootReducer, undefined, composedEnhancers);
export default store;
