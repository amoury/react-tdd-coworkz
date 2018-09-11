import firebase from 'firebase/app';
import "firebase/database";

export const FETCH_SPACES = "FETCH_SPACES";
export const EDIT_HEADER_IMAGE = "EDIT_HEADER_IMAGE";

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

export const editHeaderImage = imageData => ({
    type: EDIT_HEADER_IMAGE,
    payload: imageData
});


export const editHeaderImageAsync = imageData => {
  return (dispatch, getState) => {
    
    
    const { spaces } = getState();
    const editedSpace = spaces.filter(space => space.id === imageData.id)[0];
    const balanceSpaces = spaces.filter(space => space.id !== imageData.id);
    editedSpace.mainImage = { publicId: imageData.publicId, headerURL: imageData.headerURL };
    
    const updatedSpaces = [...balanceSpaces, editedSpace];

    firebase.database().ref('spaces/').set(updatedSpaces)
    .then(() => console.log('successfully updated in data'))
    .catch((err) => console.log(err.message));
    
  }
}

