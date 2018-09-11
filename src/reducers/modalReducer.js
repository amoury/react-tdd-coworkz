import { SHOW_MODAL, HIDE_MODAL } from '../actions/modalActions';

const initialState = {
  modalType: null,
  modalProps: {}
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducer;