import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaHMLxX_PlH1g9K-FlxXpsu4UgCxhBwEU",
  authDomain: "admin-app-34c7c.firebaseapp.com",
  projectId: "admin-app-34c7c",
  storageBucket: "admin-app-34c7c.appspot.com",
  messagingSenderId: "560315606932",
  appId: "1:560315606932:web:1535d49f8cf217f7499181"
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

