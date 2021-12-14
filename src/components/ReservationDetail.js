import React from "react";
import PropTypes from "prop-types";

function ReservationDetail(props){
  const { reservation, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Reservation Detail</h1>
      <h3>Date: {reservation.visitDate}</h3>
      <h3>{reservation.groupName}: Contact - {reservation.organizer}</h3>
      <p><em>{reservation.email}</em></p>
      <p>{reservation.groupSize}</p>
      <p>{reservation.activities}</p>
      <p>{reservation.notes}</p>
      <button onClick={ props.onClickingEdit }>Update Reservation</button>
      <button onClick={()=> onClickingDelete(reservation.id) }>Close Reservation</button>
      <hr/>
    </React.Fragment>
  );
}

ReservationDetail.propTypes = {
  reservation: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ReservationDetail;