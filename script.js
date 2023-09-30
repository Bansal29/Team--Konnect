const themeToggle = document.getElementById("theme-toggle-checkbox");

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark-mode") {
  themeToggle.checked = true;
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("change", () => {
  // Toggle dark mode class
  document.body.classList.toggle("dark-mode");

  // Select the specific element with the class 'heroimg' and set its src attribute
  const heroImg = document.querySelector(".heroimg");
  const logo = document.querySelector(".logoimg");
  const foot = document.querySelector("footer");
  const footimg = document.querySelector("footimg");
  if (document.body.classList.contains("dark-mode")) {
    heroImg.setAttribute("src", "abtimg.png"); // Change the image for dark mode
    logo.setAttribute("src", "dark.png"); // Change the image for dark mode
    footimg.setAttribute("src", "light.png");
    foot.classList.add("addclass");
    localStorage.setItem("theme", "dark-mode");
  } else {
    heroImg.setAttribute("src", "https://i.postimg.cc/65QxYYzh/001234.png"); // Change the image for light mode
    logo.setAttribute("src", "light.png"); // Change the image for light mode
    foot.classList.remove("addclass");
    footimg.setAttribute("src", "dark.png");
    localStorage.setItem("theme", "");
  }
});
// Assistant Options Toggle
const assistantOptions = document.querySelector(".assistant-options");
document.querySelector(".assistant-btn").addEventListener("click", function () {
  assistantOptions.style.display =
    assistantOptions.style.display === "none" ? "block" : "none";
});

// Request Callback Popup Functions
function showRequestCallback() {
  document.querySelector(".request-callback-popup").style.display = "block";
  assistantOptions.style.display = "none";
}

function closeRequestCallback() {
  document.querySelector(".request-callback-popup").style.display = "none";
}

// Chat Popup Functions
function showChat() {
  document.querySelector(".chat-popup").style.display = "block";
  assistantOptions.style.display = "none";
}

function closeChat() {
  document.querySelector(".chat-popup").style.display = "none";
}

function toggleBoxDetails(boxId) {
  const detailsSection = document.getElementById(`${boxId}-details`);
  detailsSection.classList.toggle("expanded");
}

// Toggle between text and form on click
const getInTouchText = document.getElementById("get-in-touch");
const contactForm = document.getElementById("contact-form");

getInTouchText.addEventListener("click", function () {
  getInTouchText.style.display = "none";
  contactForm.style.display = "block";
});

// Contact Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Process the form data here
  });
function openSignInForm() {
  document.getElementById("signin-modal").style.display = "block";
}

function closeSignInForm() {
  document.getElementById("signin-modal").style.display = "none";
}
const emailInput1 = document.getElementById("email1");
const emailInput2 = document.getElementById("email2");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const showPasswordButton = document.getElementById("show-password");
const universitySelect = document.getElementById("university");

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate email using a regular expression
  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // if (!emailPattern.test(email)) {
  //     emailError.textContent = 'Invalid email address';
  //     return;
  // } else {
  //     emailError.textContent = '';
  // }

  // Check if passwords match
  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match";
    return;
  } else {
    passwordError.textContent = "";
  }
  alert("Sign Up successfull! Welcome to Connect!");
  // Redirect to the dashboard page upon successful submission
  window.location.href = "dashboard.html"; // Replace with your actual dashboard page URL
});

showPasswordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "Show";
  }
});

const universities = [
  "Bharati Vidyapeeth",
  "Deccan College Post-Graduate and Research Institute",
  "Defence Institute of Advanced Technology (formerly Institute of Armament Technology)",
  "Dnyaneshwar Vidyapeeth",
  "FLAME University",
  "Gokhale Institute of Politics and Economics",
  "Indian Institute of Information Technology, Pune",
  "Indian Institute of Science Education and Research, Pune",
  "Christ University Pune Lavasa, Campus",
  "Indian Institute of Science Education and Research, Pune",
  "National Institute of Construction Management and Research",
  "National Defence Academy",
  "Tilak Maharashtra University",
  "Savitribai Phule Pune University",
  "Spicer Adventist University",
  "Symbiosis International University",
  "MIT University - MIT Art, Design and Technology University",
  "Ajeenkya DY Patil University",
  "Flame University",
  "MIT - World Peace University",
  "Spicer Adventist University",
  "Christ University Pune Lavasa, Campus",
  "Symbiosis International University",
  "Symbiosis Skills and Professional University",
];

// Sort the universities array alphabetically
universities.sort();

// Populate the select element with the sorted universities
universities.forEach((university) => {
  const option = document.createElement("option");
  option.text = university;
  option.value = university;
  universitySelect.appendChild(option);
});

universitySelect.addEventListener("change", () => {
  const selectedUniversity = universitySelect.value;

  // Define a mapping of universities to email domains (update as needed)
  const universityToEmailDomain = {
    "Bharati Vidyapeeth": "bharatividyapeeth.edu.in",
    "Deccan College Post-Graduate and Research Institute":
      "deccancollege.edu.in",
    "MIT - World Peace University": "mitwpu.edu.in",
    "MIT University - MIT Art, Design and Technology University":
      "mitwpu.edu.in",
    // Add more universities and domains as needed
  };

  // Set the email field based on the selected university
  if (universityToEmailDomain[selectedUniversity]) {
    emailInput2.value = `@${universityToEmailDomain[selectedUniversity]}`;
  } else {
    emailInput2.value = "";
  }
});
