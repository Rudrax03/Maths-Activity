function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  const usernameRegex = /^[a-zA-Z0-9]{1,10}$/; // Up to 10 alphanumeric characters
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // At least 8 characters, including letters, numbers, and special characters

  let isValid = true;
  let message = "";

  if (!usernameRegex.test(username)) {
    message = "Username must be alphanumeric and up to 10 characters.";
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    message =
      "Password must be at least 8 characters long, include letters, numbers, and special characters.";
    isValid = false;
  }

  if (isValid) {
    messageElement.className = "success";
    message = "Login successful!";
  } else {
    messageElement.className = "error";
  }

  messageElement.textContent = message;
  messageElement.classList.remove("hidden");

  return isValid;
}
