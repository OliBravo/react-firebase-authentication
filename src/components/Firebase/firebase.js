import app from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBx3VzXf2AvkUuOxyK_MUNdgPF8zhqsR7U",
    authDomain: "robin-tutorial-3803e.firebaseapp.com",
    databaseURL: "https://robin-tutorial-3803e.firebaseio.com",
    projectId: "robin-tutorial-3803e",
    storageBucket: "robin-tutorial-3803e.appspot.com",
    messagingSenderId: "904243751532",
    appId: "1:904243751532:web:78b6c0640622632911c649"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => 
      this.auth.createUserWithEmailAndPassword(email, password); 
    
    doSignInWithEmailAndPassword = (email, password) => 
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;