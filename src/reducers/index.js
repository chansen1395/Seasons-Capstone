import formVisibleReducer from './form-visible-reducer';
import reservationListReducer from './reservation-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import 'firebase/compat/auth';
import 'firebase/auth';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainReservationList: reservationListReducer,
  firestore: firestoreReducer
});

export default rootReducer;