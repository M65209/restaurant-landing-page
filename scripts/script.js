const emailInput = document.getElementById("email-input");
const subscribeButton = document.getElementById("subscribe");

if (subscribeButton && emailInput) {
  subscribeButton.addEventListener("click", displayEmail);
}

function displayEmail() {
  const email = emailInput.value.trim();

  if (email && email.includes("@")) {
    alert(`Subscribed with email: ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}