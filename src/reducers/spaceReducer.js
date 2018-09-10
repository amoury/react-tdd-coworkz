import { FETCH_SPACES } from '../actions/spaceActions';

const initialState = [];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES:
      return [...action.payload];
    default:
      return state;
  }

}


export default spacesReducer;