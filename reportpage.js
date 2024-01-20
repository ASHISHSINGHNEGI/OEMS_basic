// ====================================don't touch the below code===============================

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
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

let courseData = {
  MCA: ["MCA"],
  BTech: ["CSE", "AIML", "EE", "ECE", "ME", "CE", "BT"],
  Mtech: ["Mtech"],
  PhD: ["PhD"],
};
//use of .value here is because of it give the selected value of the element else it will store the element that will effext the results
let course, branch, subject1, subject2;

//show button
const showButton = document.getElementById("show");
//table tag
const fetchedTable = document.getElementById("reportTable");
//=======================code for populating dropdown in the form========================
let newOptions;
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
//====================================function for fetching report===================================================

async function fetchReport() {
  //use of .value here is because of it give the selected value of the element else it will store the element that will effext the results
  course = document.getElementById("courseDropdown").value;
  branch = document.getElementById("branchDropdown").value;
  subject1 = document.getElementById("subject1Dropdown").value;
  subject2 = document.getElementById("subject2Dropdown").value;
  try {
    let tableHTML = "";
    fetchedTable.innerHTML = tableHTML;
    console.log(
      `course = ${course}\n branch = ${branch}\n subject1 = ${subject1}\n subject2 = ${subject2}\n`
    );

    tableHTML =
      "<tr><th>Institude ID</th><th>Name</th><th>Course</th><th>Branch</th><th>email</th><th>subject1</th><th>subject2</th></tr>";
    let q;
    // Create a query variable against the collection.
    if (subject1 != "" && subject2 == "" && course == "" && branch == "") {
      console.log("s1 selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject1", "==", subject1)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 != "" &&
      course == "" &&
      branch == ""
    ) {
      console.log("s2 selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject2", "==", subject2)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 == "" &&
      course != "" &&
      branch == ""
    ) {
      console.log("c selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("course", "==", course)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 == "" &&
      course == "" &&
      branch != ""
    ) {
      console.log("b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("branch", "==", branch)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 != "" &&
      course == "" &&
      branch == ""
    ) {
      console.log(`subject1 = ${subject1} and subject2 = ${subject2} selected`);

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject1", "==", subject1),
        where("subject2", "==", subject2)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 == "" &&
      course != "" &&
      branch == ""
    ) {
      console.log("c,s1 selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("course", "==", course),
        where("subject1", "==", subject1)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 == "" &&
      course == "" &&
      branch != ""
    ) {
      console.log("s1,b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("branch", "==", branch),
        where("subject1", "==", subject1)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 != "" &&
      course != "" &&
      branch == ""
    ) {
      console.log("c,s2 selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("course", "==", course),
        where("subject2", "==", subject2)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 != "" &&
      course == "" &&
      branch != ""
    ) {
      console.log("s2,b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("branch", "==", branch),
        where("subject2", "==", subject2)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 == "" &&
      course != "" &&
      branch != ""
    ) {
      console.log(`${course},${branch} selected`);

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("course", "==", course),
        where("branch", "==", branch)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 != "" &&
      course != "" &&
      branch == ""
    ) {
      console.log("c,s2,s1 selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject1", "==", subject1),
        where("subject2", "==", subject2),
        where("course", "==", course)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 != "" &&
      course == "" &&
      branch != ""
    ) {
      console.log("s1,s2,b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject1", "==", subject1),
        where("subject2", "==", subject2),
        where("branch", "==", branch)
      ); //db = database var
    } else if (
      subject1 != "" &&
      subject2 == "" &&
      course != "" &&
      branch != ""
    ) {
      console.log("c,s1,b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("subject1", "==", subject1),
        where("course", "==", course),
        where("branch", "==", branch)
      ); //db = database var
    } else if (
      subject1 == "" &&
      subject2 != "" &&
      course != "" &&
      branch != ""
    ) {
      console.log("c,s2,b selected");

      q = query(
        collection(db, "studentSubjectSelectionDetails"),
        where("course", "==", course),
        where("subject2", "==", subject2),
        where("branch", "==", branch)
      ); //db = database var
    } else {
      console.log("nothing selected");
      q = query(collection(db, "studentSubjectSelectionDetails")); //db = database var
    }
    const querySnapshot = await getDocs(q);
    console.log("query fetched");

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      tableHTML += `<tr><td>${data.instituteId}</td><td>${data.name}</td><td>${data.course}</td><td>${data.branch}</td><td>${data.email}</td><td>${data.subject1}</td><td>${data.subject2}</td></tr>;`;
    });
    fetchedTable.innerHTML = tableHTML;
    console.log("succussful");
  } catch (error) {
    console.log(error);
  }
}
//event for show button
showButton.addEventListener("click", fetchReport);
document.getElementById("courseDropdown").addEventListener("change", setBranch);

// const reportPDF = document.getElementById("generateReport");
// reportPDF.addEventListener("click", generatePDF);
