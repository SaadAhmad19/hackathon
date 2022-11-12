 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAaHMLxX_PlH1g9K-FlxXpsu4UgCxhBwEU",
    authDomain: "admin-app-34c7c.firebaseapp.com",
    projectId: "admin-app-34c7c",
    storageBucket: "admin-app-34c7c.appspot.com",
    messagingSenderId: "560315606932",
    appId: "1:560315606932:web:1535d49f8cf217f7499181"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
const email = document.getElementById("username")
const password = document.getElementById("password")
  
window.onload = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      location = "AdminPannel.html";
  
    } else {
      // User is signed out
      // ...
    }
  });
  
const submitBTN =()=>{
    event.preventDefault(); 
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          location = "AdminPannel.html"
        })
        .catch((error) => {
          if (error) {
            swal("Wrong Password", "Please enter correct password");
          }  
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", error);
        });
  }

window.submitBTN = submitBTN;










































