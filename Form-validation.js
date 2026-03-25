let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passError = document.getElementById("passError");

  // reset errors
  nameError.innerText = "";
  emailError.innerText = "";
  passError.innerText = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.innerText = "Enter valid email";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passError.innerText = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passError.innerText = "Password must be 6+ charcters";
    isValid = false;
  }

  // Success
  if (isValid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});