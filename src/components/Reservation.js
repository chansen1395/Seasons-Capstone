import React from "react";
import PropTypes from "prop-types";

function Reservation(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenReservationClicked(props.id)}>
        <h3>{props.groupName} - {props.organizer}</h3>
        <p><em>{props.visitDate}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Reservation.propTypes = {
  organizer: PropTypes.string,
  groupName: PropTypes.string,
  visitDate: PropTypes.instanceOf(Date),
  id: PropTypes.string,
  whenReservationClicked: PropTypes.func
};

export default Reservation;