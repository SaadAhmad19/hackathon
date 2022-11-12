import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "AIzaSyAaHMLxX_PlH1g9K-FlxXpsu4UgCxhBwEU",
    authDomain: "admin-app-34c7c.firebaseapp.com",
    projectId: "admin-app-34c7c",
    storageBucket: "admin-app-34c7c.appspot.com",
    messagingSenderId: "560315606932",
    appId: "1:560315606932:web:1535d49f8cf217f7499181"
 };
 const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 

 const course =document.getElementById("coures")[document.getElementById("coures").selectedIndex].innerHTML
 const sect =document.getElementById("Sec")[document.getElementById("Sec").selectedIndex].innerHTML
 const teach =document.getElementById("cTeach")[document.getElementById("cTeach").selectedIndex].innerHTML
 const cschd =document.getElementById("cSchd")[document.getElementById("cSchd").selectedIndex].innerHTML
 const ctime =document.getElementById("cTime")[document.getElementById("cTime").selectedIndex].innerHTML


const fSubmit = async () =>{
    event.preventDefault()
    
  const docRef = await addDoc(collection(db, "class"), {
        classTimings : ctime, 
        schedulOfClasses: cschd,
        teacherName: teach,
        sectionName: sect,
        courseName: course,
});
}

window.fSubmit=fSubmit
