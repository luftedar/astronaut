import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import translationReducer from './translationStore';
import inputReducer from './inputStore';

const reducer = combineReducers({
  translationReducer,
  inputReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default { store };
