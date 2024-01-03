import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const form = document.getElementById("openElectiveSelectionForm");
const submitButton = document.getElementById("submitButton");

const firebaseConfig = {
  apiKey: "AIzaSyC-DOC2Tz7Po9lbzIumZ14-KKoBQjgp1_U",
  authDomain: "openelective2-95186.firebaseapp.com",
  databaseURL:
    "https://openelective2-95186-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "openelective2-95186",
  storageBucket: "openelective2-95186.appspot.com",
  messagingSenderId: "354014652523",
  appId: "1:354014652523:web:429930cd8b600ef8fba92e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
  // Get the form and submit button elements

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Retrieve form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const instituteId = document.getElementById("InstituteId").value;
    const course = document.getElementById("Course").value;
    const branch = document.getElementById("Branch").value;
    const subject1 = document.getElementById("subject1").value;
    const subject2 = document.getElementById("subject2").value;

    // Add data to Firestore collection
    db.collection("users")
      .add({
        name: name,
        email: email,
        instituteId: instituteId,
        course: course,
        branch: branch,
        subject1: subject1,
        subject2: subject2,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // Reset form after successful submission
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  form.addEventListener("submit", handleSubmit);
});
