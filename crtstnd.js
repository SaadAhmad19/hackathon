import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
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
 const storage = getStorage();

 const sName =document.getElementById("sName")
const fName =document.getElementById("fName")
const rNum =document.getElementById("rNum")
const cNum =document.getElementById("cNum")
const idNum =document.getElementById("idNum")
const pPic =document.getElementById("pPic")
const courseName =document.getElementById("courseName")
const cSection =document.getElementById("cSection")[document.getElementById("cSection").selectedIndex].innerHTML


// console.log(ctime);
// Add a new document with a generated id.


const fSubmit = async () =>{
    event.preventDefault()
    const gettingImgSrc = await getImgIntoURL(pPic.files[0]);
try {const docRef = await addDoc(collection(db, "student"), {
studentName:sName.value,
fatherName:fName.value,
Roll:rNum.value,
conatactNum:cNum.value,
cnicNum:idNum.value,
Profile:gettingImgSrc,
courseName:courseName.value,
classSection:cSection,
});

}
catch(error){
console.log(error);
}
}



const getImgIntoURL = (file) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${file.name}.png`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
        );
    })
}




window.fSubmit=fSubmit