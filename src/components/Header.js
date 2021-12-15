import React from "react";
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';
import { connect } from 'react-redux';
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



// class Header extends React.Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedReservation: null,
//       editing: false
//     };
//   }
function Header() {

    const auth = getAuth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
  // const auth = getAuth();
  const user = auth.currentUser;
  // render() {
  // };
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
  // if (user === null) {
    return (
      <React.Fragment>
        <h1> Red Oak Farm</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-out">Sign Out</Link>
          </li>
        </ul>
      </React.Fragment>
    )
  // } else if (user !== null){
  } else if ((isLoaded(auth)) && (auth.currentUser != null)){

    return (



      // if ((isLoaded(auth)) && (auth.currentUser != null)) {
      // return (
      <React.Fragment>
        <h1> Red Oak Farm</h1>
        <ul>
          <p>Signed in as: {user.email}</p>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-out">Sign Out</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
  // }
}

// Header.propTypes = {
//   mainReservationList: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     mainReservationList: state.mainReservationList,
//     formVisibleOnPage: state.formVisibleOnPage
//   }
// }

// Header = connect(mapStateToProps)(Header);

// export default withFirestore(Header);
export default Header;