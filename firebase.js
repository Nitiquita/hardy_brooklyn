var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: "AIzaSyBUORmX2qG7BXFC4hqfKAq0Y6HMAsLTGbw",
  authDomain: "hardy-brooklyn.firebaseapp.com",
  databaseURL: "https://hardy-brooklyn.firebaseio.com",
  projectId: "hardy-brooklyn",
  storageBucket: "hardy-brooklyn.appspot.com",
  messagingSenderId: "392580429077"
};
firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth,
};
