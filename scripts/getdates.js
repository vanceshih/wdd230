// Get current year
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = currentYear;

// Get last modified date
var lastModifiedDate = document.lastModified;
document.getElementById('lastModified').innerText = 'Last Modified: ' + lastModifiedDate;