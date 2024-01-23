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



//   Signup
let signup = document.querySelector(".signup-btn")
 signup.addEventListener("click", (e) => {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeat-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatPassword: repeat-password,
      })
      alert('User Created!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})
// Login
let login = document.querySelector(".login-btn")
 login.addEventListener("click", (e) => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const dt = new Date();
      const user = userCredential.user;
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      })
      if (!user) {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Perform login validation (you can use AJAX to communicate with the server)
        const isValid = validateLogin(email, password); // Implement this function

        if (isValid) {
          // Redirect to the dashboard page
          window.location.href = "dashboard.html";
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Invalid credentials. Please try again.",
          })
        }
      } else {
        // Redirect to the dashboard page if already logged in
        window.location.href = "dashboard.html";
      }
      alert('User LoggedIn!');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})