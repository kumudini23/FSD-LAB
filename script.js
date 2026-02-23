document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = document.getElementById("message");

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    message.style.color = "red";
    message.textContent = "Name cannot be empty!";
  } else if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email!";
  } else if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters!";
  } else if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful! 🎉";
  }
});