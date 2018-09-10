import firebase from 'firebase/app';
import "firebase/database";

export const FETCH_SPACES = "FETCH_SPACES";

console.log('Space Action');

export const fetchSpacesAsync = () => {
  return dispatch => {
    firebase.database().ref('spaces/').on('value', snapshot => {
      dispatch(fetchSpaces(snapshot.val()));
    });
  }
}

export const fetchSpaces = (spaces) => ({
    type: FETCH_SPACES,
    payload: spaces
});