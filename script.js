// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9fWu3R5pfKC3BWBkPjc9zRQB7lWpu7ow",
  authDomain: "oemsbasic.firebaseapp.com",
  projectId: "oemsbasic",
  storageBucket: "oemsbasic.appspot.com",
  messagingSenderId: "407214565237",
  appId: "1:407214565237:web:2eb8f7910bce4b00abd53c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function checkUserDetails() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "" && password == "") {
    document.getElementById("loginMessage").innerText =
      "Email or Password is empty";
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`succussful`);
        // Redirect to another webpage on successful authentication
        window.location.href = "./home.html"; // Replace with the desired URL

        // ...
      })
      .catch((error) => {
        document.getElementById("loginMessage").innerText = error.message;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "\n" + errorMessage);
      });
  }
}

document.getElementById("login").addEventListener("click", checkUserDetails);
