import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJGMLgHYVGWwDMSRGnRIbuRmJYeGuE0Y8",
    authDomain: "hackathon-f7d2a.firebaseapp.com",
    projectId: "hackathon-f7d2a",
    storageBucket: "hackathon-f7d2a.appspot.com",
    messagingSenderId: "36620486234",
    appId: "1:36620486234:web:8e655a655621de10a77a63"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.onload = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      location = "index.html";
    } else {

    }
  });
}

const logOut = () => {
  signOut(auth).then(() => {
  }).catch((error) => {
  })
}
window.logOut = logOut;

