 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCJGMLgHYVGWwDMSRGnRIbuRmJYeGuE0Y8",
    authDomain: "hackathon-f7d2a.firebaseapp.com",
    projectId: "hackathon-f7d2a",
    storageBucket: "hackathon-f7d2a.appspot.com",
    messagingSenderId: "36620486234",
    appId: "1:36620486234:web:8e655a655621de10a77a63"
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










































