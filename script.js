function validateForm() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your form validation here
    // For example:
    if (username === "" || password === "") {
        document.getElementById('loginMessage').innerHTML = 'Please enter username and password.';
        return false; // Prevent form submission
    }

    // Valid login
    if (username == 'ashish' && password === '1234') {
        document.getElementById('loginMessage').innerHTML = 'Successful';
        // Redirect to home page after successful login
        console.log("succussful")
        for (let index = 0; index < 10000000; index++) {

        }
        // window.location.replace("./home.html"); // Replace 'home.html' with the actual URL of your home page
        // window.location.href = "./home.html";
        window.location.href = "./home.html";

    }
}
