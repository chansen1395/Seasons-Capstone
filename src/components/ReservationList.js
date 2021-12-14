import React from "react";
import PropTypes from "prop-types";
import Reservation from "./Reservation";
// We need to import hooks functionality from both react-redux and react-redux-firebase.
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function ReservationList(props){
  // The useFirestoreConnect() hook comes from react-redux-firebase.
  // useFirestoreConnect([
  //   { collection: 'reservations',
  //     doc: reservationId }
  // ]);
  useFirestoreConnect([
    { collection: 'reservations'}
  ]);

  // The useSelector() hook comes from react-redux.
  const reservations = useSelector(state => state.firestore.ordered.reservations);

  // react-redux-firebase also offers a useful isLoaded() function.
  if (isLoaded(reservations)) {
    return (
      <React.Fragment>
        <hr/>
        {reservations.map((reservation) => {
          return <Reservation
            whenReservationClicked = { props.onReservationSelection }
            organizer = { reservation.organizer }
            groupName = { reservation.groupName } 
            visitDate = { reservation.visitDate }
            groupSize = { reservation.groupSize }
            activities = { reservation.activities }
            notes = { reservation.notes }
            email = { reservation.email }
            id={ reservation.id }
            key={ reservation.id }/>
        })}
      </React.Fragment>
    );
  // If the reservations aren't loaded yet, our fragment will return a "Loading..." message.
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

ReservationList.propTypes = {
  // We no longer need reservationList props.
  // reservationList: PropTypes.object,
  onReservationSelection: PropTypes.func
};

export default ReservationList;