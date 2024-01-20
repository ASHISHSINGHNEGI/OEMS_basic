// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getCountFromServer,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  signOut,
  getAuth,
  onAuthStateChanged,
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

// Initialize Cloud Firestore and get a reference to the service
const authF = getFirestore(app);

// signout function
const auth = getAuth(app);
function userLogout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "./index.html"; // Replace with the desired URL
    })
    .catch((error) => {
      // An error happened.
    });
}
let uid, userEmail;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    uid = user.uid;
    userEmail = user.email;
    document.getElementById("username").innerText = userEmail;

    // Update the username span with the user's email
  } else {
    // User is signed out
    // Clear the username span if needed
    document.getElementById("username").innerText = "user";
    // ...
  }
});

let q = query(
  collection(authF, "studentSubjectSelectionDetails"),
  where("email", "==", userEmail)
);
const querySnapshot = await getDocs(q);
if ((querySnapshot = !null)) {
  document.getElementById("name").value = querySnapshot.name;
}

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
      collection(authF, "studentSubjectSelectionDetails"),
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
let courseData = {
  MCA: ["MCA"],
  BTech: ["CSE", "AIML", "EE", "ECE", "ME", "CE", "BT"],
  Mtech: ["Mtech"],
  PhD: ["PhD"],
};
let newOptions;
let course;
function setBranch() {
  newOptions = "";
  newOptions = `<option value="">Please select your branch</option>`;
  course = document.getElementById("courseDropdown").value;
  console.log(`course = ${course}`);
  const values = courseData[course];
  values.forEach((element) => {
    newOptions = newOptions.concat(
      `<option value=${element} > ${element} </option>`
    );
  });
  document.getElementById("branchDropdown").innerHTML = newOptions;
}

document.getElementById("courseDropdown").addEventListener("change", setBranch);

let tableValue;

const coll = collection(authF, "studentSubjectSelectionDetails");
const option1 = query(coll, where("subject1", "==", "option1"));
const option2 = query(coll, where("subject1", "==", "option2"));
const option3 = query(coll, where("subject1", "==", "option3"));
const option4 = query(coll, where("subject1", "==", "option4"));

async function count(params) {
  const snapshot = await getCountFromServer(params);
  let val = snapshot.data().count;

  return val;
}

let op1 = await count(option1),
  op2 = await count(option2),
  op3 = await count(option3),
  op4 = await count(option4);
console.log("option1: ", op1.data);
tableValue = `
<tr><td>option1</td><td>${op1}</td></tr>
<tr><td>option2</td><td>${op2}</td></tr>
<tr><td>option3</td><td>${op3}</td></tr>
<tr><td>option4</td><td>${op4}</td></tr>;
`;
document.getElementById("scoreboard").innerHTML = tableValue;

document.getElementById("logout").addEventListener("click", userLogout);
