function checkForm() {
  // TODO: Perform input validation
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  const formErrors = document.getElementById("formErrors");

  let errorList = "";
  let inputElements = [fullName, email, password, passwordConfirm];
  let inputIds = ["fullName", "email", "password", "passwordConfirm"];

  // Remove all error classes
  inputElements.forEach(function (inputElement, index) {
    document.getElementById(inputIds[index]).classList.remove("error");
  });

  // Add error class to inputs with invalid input
  let inputHasError = false;

  // Ensure a full name with a length greater than or equal to 1 was provided
  if (fullName.length < 1) {
    errorList += "<li>Missing full name.</li>";
    document.getElementById("fullName").classList.add("error");
    inputHasError = true;
  }

  // Ensure that an email address was provided and that the email address matches the email regular expression
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if (!email || !emailRegex.test(email)) {
    errorList += "<li>Invalid or missing email address.</li>";
    document.getElementById("email").classList.add("error");
    inputHasError = true;
  }

  // Ensure the password has 10 to 20 characters
  if (password.length < 10 || password.length > 20) {
    errorList += "<li>Password must be between 10 and 20 characters.</li>";
    document.getElementById("password").classList.add("error");
    inputHasError = true;
  }

  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
    errorList +=
      "<li>Password must contain at least one lowercase character.</li>";
    document.getElementById("password").classList.add("error");
    inputHasError = true;
  }

  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    errorList +=
      "<li>Password must contain at least one uppercase character.</li>";
    document.getElementById("password").classList.add("error");
    inputHasError = true;
  }

  const digitRegex = /\d/;
  if (!digitRegex.test(password)) {
    errorList += "<li>Password must contain at least one digit.</li>";
    document.getElementById("password").classList.add("error");
    inputHasError = true;
  }

  // Ensure the password and confirmation password match
  if (password !== passwordConfirm) {
    errorList += "<li>Password and confirmation password don't match.</li>";
    document.getElementById("passwordConfirm").classList.add("error");
    inputHasError = true;
  }

  // Display form errors
  if (inputHasError) {
    formErrors.innerHTML = "<ul>" + errorList + "</ul";
  } else {
    formErrors.classList.add("hide");
  }
}

document.getElementById("submit").addEventListener("click", function (event) {
  checkForm();

  // Prevent default form action. DO NOT REMOVE THIS LINE
  event.preventDefault();
});
