import React from 'react';
import NewReservationForm from './NewReservationForm';
import ReservationList from './ReservationList';
import ReservationDetail from './ReservationDetail';
import EditReservationForm from './EditReservationForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';

class ReservationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedReservation: null,
      editing: false
    };
  }

  // componentDidMount() {
  //   this.waitTimeUpdateTimer = setInterval(() =>
  //     this.updateReservationElapsedWaitTime(),
  //     60000
  //   );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.waitTimeUpdateTimer);
  // }

  // updateReservationElapsedWaitTime = () => {
  //   const { dispatch } = this.props;
  //   Object.values(this.props.mainReservationList).forEach(reservation => {
  //     const newFormattedWaitTime = reservation.timeOpen.fromNow(true);
  //     const action = a.updateTime(reservation.id, newFormattedWaitTime);
  //     dispatch(action);
  //   });
  // }

  handleClick = () => {
    if (this.state.selectedReservation != null) {
      this.setState({
        selectedReservation: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewReservationToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedReservation = (id) => {
    this.props.firestore.get({ collection: 'reservations', doc: id }).then((reservation) => {
      const firestoreReservation = {
        names: reservation.get("names"),
        location: reservation.get("location"),
        issue: reservation.get("issue"),
        id: reservation.id
      }
      this.setState({ selectedReservation: firestoreReservation });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingReservationInList = () => {
    this.setState({
      editing: false,
      selectedReservation: null
    });
  }

  handleDeletingReservation = (id) => {
    this.props.firestore.delete({ collection: 'reservations', doc: id });
    this.setState({ selectedReservation: null });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditReservationForm reservation={this.state.selectedReservation} onEditReservation={this.handleEditingReservationInList} />
        buttonText = "Return to Reservation List";
      } else if (this.state.selectedReservation != null) {
        currentlyVisibleState =
          <ReservationDetail
            reservation={this.state.selectedReservation}
            onClickingDelete={this.handleDeletingReservation}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Reservation List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewReservationForm onNewReservationCreation={this.handleAddingNewReservationToList} />;
        buttonText = "Return to Reservation List";
      } else {
        currentlyVisibleState = <ReservationList reservationList={this.props.mainReservationList} onReservationSelection={this.handleChangingSelectedReservation} />;
        buttonText = "Add Reservation";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

ReservationControl.propTypes = {
  mainReservationList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainReservationList: state.mainReservationList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ReservationControl = connect(mapStateToProps)(ReservationControl);

export default withFirestore(ReservationControl);