import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import codateReducer from './codate/codate';

const reducer = combineReducers({
  codateReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;