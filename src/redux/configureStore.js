import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import translationReducer from "./translationStore";

const reducer = combineReducers({
  translationReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default { store };