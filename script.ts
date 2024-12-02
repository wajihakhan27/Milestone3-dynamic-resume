// Get references to DOM elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
const generateButton = document.getElementById("generateResume") as HTMLButtonElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;

// Function to generate resume
function generateResume(): void {
  // Capture form data
  const formData = new FormData(resumeForm);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string;
  const education = formData.get("education") as string;
  const experience = formData.get("experience") as string;
  const skills = formData.get("skills") as string;
  const languages = formData.get("languages") as string;
  const hobbies = formData.get("hobbies") as string;

  // Build the resume HTML
  const resumeHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone no:</strong> ${phone}</p>
     <p><strong>Adress:</strong> ${address}</p>
    <h4>Education:</h4>
    <p>${education}</p>
    <h4>Work Experience:</h4>
    <p>${experience}</p>
    <h4>Skills:</h4>
    <p>${skills}</p>
    <h4>Languages:</h4>
    <p>${languages}</p>
    <h4>Hobbies:</h4>
    <p>${hobbies}</p>
  `;

  // Display the resume and hide the form
  resumeOutput.innerHTML = resumeHTML;
  resumeForm.classList.add("hidden");
  resumeContainer.classList.remove("hidden");
}

// Function to edit resume details
function editResume(): void {
  // Hide resume and show the form
  resumeContainer.classList.add("hidden");
  resumeForm.classList.remove("hidden");
}

// Attach event listeners
generateButton.addEventListener("click", generateResume);
editButton.addEventListener("click", editResume);
