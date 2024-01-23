import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyChE48dwUb_2NGTW41LY4pJ8Boy_GYvAN8",
    authDomain: "practice-7f1b8.firebaseapp.com",
    databaseURL: "https://practice-7f1b8-default-rtdb.firebaseio.com",
    projectId: "practice-7f1b8",
    storageBucket: "practice-7f1b8.appspot.com",
    messagingSenderId: "726002321264",
    appId: "1:726002321264:web:28c1d63eba96f4ae78f1b5",
    measurementId: "G-P1QL233TMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


const saveDate = new Date(schedule,teacherName, classTimings, sectionName,courseName,batchNumber).toLocaleString()
function saveData() {
    const schedule = document.getElementById("schedule").value;
    const teacherName = document.getElementById("teacherName").value;
    const classTimings = document.getElementById("classTimings").value;
    const sectionName = document.getElementById("sectionName").value;
    const courseName = document.getElementById("courseName").value;
    const batchNumber = document.getElementById("batchNumber").value;
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
        
       
           
//       const user = userCredential.user;
//       set(ref(database, 'users/' + user.uid), {
//         schedule :schedule,
//         teacherName :teacherName,
//         classTimings :classTimings,
//         sectionName :sectionName,
//         courseName :courseName,
//         batchNumber :batchNumber,
//     })
//     alert('User Created!');
    
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }

    const database = firebase.database();
    const newData = {
        classTimings,
        schedule,
        teacherName,
        sectionName,
        courseName,
        batchNumber,
    };
    // const saveDate = new Date().toLocaleString();

    // Push data to a specific location in your database
}
