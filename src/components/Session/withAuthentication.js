import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
require ('firebase/compat/auth') ;
// import firebase from '../src/firebase';
// import firebase from '../firebase';
// src\firebase.js
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      if(typeof this.listener === "function"){
        this.listener();
      }
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
  // return firebase(WithAuthentication);
};

export default withAuthentication;