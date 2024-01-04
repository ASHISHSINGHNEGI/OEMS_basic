// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function store() {
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const instituteId = document.getElementById("InstituteId").value;
    const course = document.getElementById("Course").value;
    const branch = document.getElementById("Branch").value;
    const subject1 = document.getElementById("subject1").value;
    const subject2 = document.getElementById("subject2").value;
    const message = document.getElementById("message");
    const form = document.getElementById("openElectiveSelectionForm");
    const docRef = await addDoc(
      collection(db, "studentSubjectSelectionDetails"),
      {
        name: name,
        email: email,
        instituteId: instituteId,
        course: course,
        branch: branch,
        subject1: subject1,
        subject2: subject2,
      }
    );
    message.innerText = `Document saved -  ${name}`;
    console.log("Document written with ID: ", docRef.id);
    form.reset();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const button = document.getElementById("submitButton");

button.addEventListener("click", store);
