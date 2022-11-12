import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query,where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaHMLxX_PlH1g9K-FlxXpsu4UgCxhBwEU",
    authDomain: "admin-app-34c7c.firebaseapp.com",
    projectId: "admin-app-34c7c",
    storageBucket: "admin-app-34c7c.appspot.com",
    messagingSenderId: "560315606932",
    appId: "1:560315606932:web:1535d49f8cf217f7499181"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const q = query(collection(db, "student"));

const tablebd = document.getElementById("table-body")
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    tablebd.innerHTML += `
  <tr class="tr">
  <td  class="td">${doc.data().Profile}</td>
  <td class="td">${doc.data().Roll}</td>
  <td class="td">${doc.data().classSection}</td>
    <td class="td" >${doc.data().cnicNum}</td>
    <td class="td" >${doc.data().courseName}</td>
    <td class="td" >${doc.data().fatherName}</td>
    <td class="td" >${doc.data().studentName}</td>
    </tr>
    `
});



const modalBody=document.getElementById("modalbdy")
const modlinpt=document.getElementById("modalInput")

async function  rollCheck() {

    const q = query(collection(db, "student"), where( "Roll", "==", modlinpt.value));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      
      modalBody.innerHTML+=
      `
     <br> <img class="edit" src=" ${doc.data().Profile}"> <br>
      <p> Roll number ${doc.data().Roll} </p>
      <p> section ${doc.data().classSection} </p>
      <p>Cninc ${doc.data().cnicNum} </p>
      <p> cousrename ${doc.data().courseName} </p>
      <p> Fathername ${doc.data().fatherName} </p>
      <p> studentname ${doc.data().studentName} </p>
      `
     });
}

window.rollCheck=rollCheck