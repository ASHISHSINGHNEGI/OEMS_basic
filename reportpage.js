var courseData = {
    MCA: ["MCA"],
    BTech: ["CSE", "AIML", "EE", "ECE", "ME", "CE", "BT"],
    Mtech: ["Mtech"],
    PhD: ["PhD"]
};

function getCourseBranches(a) {

    return courseData[a] || [];
}
const coursedropdown = document.querySelector('#courseDropdown');
// const selectedCourseText = coursedropdown.options[coursedropdown.selectedIndex].text
var branchDropdown = document.getElementById("branchDropdown");


function updateBranchOptions(e) {
    const branchOptions = getCourseBranches(e.target.value);

    // Clear existing options
    branchDropdown.innerHTML = "";
    // Add new options
    branchOptions.forEach(branchName => {
        branchDropdown.innerHTML += `<option value="${branchName}">${branchName}</option>`;
    });


}

// Initialize dropdown menus
coursedropdown.addEventListener('change', updateBranchOptions);


