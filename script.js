// Get references to DOM elements
var resumeForm = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resumeContainer");
var resumeOutput = document.getElementById("resumeOutput");
var generateButton = document.getElementById("generateResume");
var editButton = document.getElementById("editButton");
// Function to generate resume
function generateResume() {
    // Capture form data
    var formData = new FormData(resumeForm);
    var name = formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");
    var address = formData.get("address");
    var education = formData.get("education");
    var experience = formData.get("experience");
    var skills = formData.get("skills");
    var languages = formData.get("languages");
    var hobbies = formData.get("hobbies");
    // Build the resume HTML
    var resumeHTML = "\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone no:</strong> ").concat(phone, "</p>\n     <p><strong>Adress:</strong> ").concat(address, "</p>\n    <h4>Education:</h4>\n    <p>").concat(education, "</p>\n    <h4>Work Experience:</h4>\n    <p>").concat(experience, "</p>\n    <h4>Skills:</h4>\n    <p>").concat(skills, "</p>\n    <h4>Languages:</h4>\n    <p>").concat(languages, "</p>\n    <h4>Hobbies:</h4>\n    <p>").concat(hobbies, "</p>\n  ");
    // Display the resume and hide the form
    resumeOutput.innerHTML = resumeHTML;
    resumeForm.classList.add("hidden");
    resumeContainer.classList.remove("hidden");
}
// Function to edit resume details
function editResume() {
    // Hide resume and show the form
    resumeContainer.classList.add("hidden");
    resumeForm.classList.remove("hidden");
}
// Attach event listeners
generateButton.addEventListener("click", generateResume);
editButton.addEventListener("click", editResume);
