import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditReservationForm(props){

  const firestore = useFirestore();

  const { reservation } = props;

  function handleEditReservationFormSubmission(event) {
    event.preventDefault();
    props.onEditReservation();
    const propertiesToUpdate = {
      organizer: event.target.organizer.value, 
      groupName: event.target.groupName.value, 
      visitDate: event.target.visitDate.value, 
      groupSize: event.target.groupSize.value, 
      activities: event.target.activities.value, 
      notes: event.target.notes.value, 
      email: event.target.email.value
    }
    return firestore.update({collection: 'reservations', doc: reservation.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditReservationFormSubmission} 
        buttonText="Update Reservation" />
    </React.Fragment>
  );
}

EditReservationForm.propTypes = {
  reservation: PropTypes.object,
  onEditReservation: PropTypes.func
};

export default EditReservationForm;