import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewReservationForm(props){

  // We add the useFirestore() hook to make Firestore available to our component. (Make sure it lives *inside* the NewReservationForm component.)
  const firestore = useFirestore();

  // Note that we updated the name of the function for adding a Reservation to addReservationToFirestore. This is a more accurate name for what the function will do now.
  function addReservationToFirestore(event) {
    event.preventDefault();

    props.onNewReservationCreation();


    return firestore.collection('reservations').add(
      {
      organizer: event.target.organizer.value, 
      groupName: event.target.groupName.value, 
      visitDate: event.target.visitDate.value, 
      groupSize: event.target.groupSize.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value
      // id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addReservationToFirestore}
        buttonText="Confirm Reservation" />
    </React.Fragment>
  );
}

NewReservationForm.propTypes = {
  onNewReservationCreation: PropTypes.func
};

export default NewReservationForm;