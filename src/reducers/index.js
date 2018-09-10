import { combineReducers } from "redux";
import spacesReducer from './spaceReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer
});

export default rootReducer;
