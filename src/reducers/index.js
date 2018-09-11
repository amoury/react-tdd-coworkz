import { combineReducers } from "redux";
import spacesReducer from './spaceReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer,
  auth: authReducer,
  modal: modalReducer
});

export default rootReducer;
