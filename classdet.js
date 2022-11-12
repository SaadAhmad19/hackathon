import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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

const q = query(collection(db, "class"));

const tablebd = document.getElementById("table-body")
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    tablebd.innerHTML += `
  <tr class="tr">
  <td class="td">${doc.data().classTimings}</td>
  <td class="td" >${doc.data().schedulOfClasses}</td>
  <td class="td" >${doc.data().teacherName}</td>
  <td class="td" >${doc.data().sectionName}</td>
  <td class="td">${doc.data().courseName}</td>
    </tr>
    `
});