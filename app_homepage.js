document.getElementById('openElectiveSelectionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    var name = document.getElementById('name').value;
    var sitve = document.getElementById('sitve').value;
    var cruise = document.getElementById('cruse').value;
    var granm = document.getElementById('granm').value;

    // Submit the form to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST
