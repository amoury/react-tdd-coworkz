import firebase from 'firebase';


export const createUserAsync = () => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword("a@xyz.com", "123456").catch( err => {
      console.log(err.message);
    })
  }
};


export const signInAsync = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword("a@xyz.com", "123456")
      .catch(error => {
        console.log(error.message);
      });
  }
};