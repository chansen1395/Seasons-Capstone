import React from "react";
import firebase from 'firebase/compat/app';

// import * as firebase from 'firebase'
import { isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("successfully signed up!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  // class SigninControl extends React.Component {

  // render () {
    // const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     // <React.Fragment>
    //       <h1>Loading...</h1>
    //     // </React.Fragment>
    //   );
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
        <h1>Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <button type='submit'>Sign up</button>
          </form>

          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
        {/* </React.Fragment> */}
      {/* ); */}
    {/* } */}

    {/* if ((isLoaded(auth)) && (auth.currentUser == !null)) {
      return (
        <React.Fragment> */}
          <h1>Sign Out</h1>
          <button onClick={doSignOut}>Sign out</button>
        </React.Fragment>

      );
    }
  // }
// }
// }
export default Signin