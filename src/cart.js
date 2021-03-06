import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

var config = {
  apiKey: "AIzaSyCex4U-B8_1eQxfqYy_jdY66k1s_GL0suw",
  authDomain: "tienda3-c85e5.firebaseapp.com",
  databaseURL: "https://tienda3-c85e5.firebaseio.com",
  projectId: "tienda3-c85e5",
  storageBucket: "tienda3-c85e5.appspot.com",
  messagingSenderId: "652376219181"
};
firebase.initializeApp(config)
class Log extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className="he">¡Signed In!</div><br></br>
            <button className="buttn3" onClick={() => firebase.auth().signOut()}>Sign out!</button><br></br>
            <h1 className="he2">Welcome {firebase.auth().currentUser.displayName}</h1>
            <img className="foti"
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <div>
              <h1 className="he"> Sign In</h1>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
        )}
      </div>
    )
  }
}

export default Log