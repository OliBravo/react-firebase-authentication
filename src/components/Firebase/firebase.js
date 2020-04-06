import app from "firebase/app";

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
    }
}

export default Firebase;