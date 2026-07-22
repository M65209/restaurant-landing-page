 const emailInput = document.getElementById("email-input");
    const subscribeButton = document.getElementById("subscribe");
    subscribeButton.addEventListener("click", displayEmail);


    function displayEmail() {
      const email = emailInput.value;
      if (email) {
        alert(`Subscribed with email: ${email}`);
        emailInput.value = ""; // Clear the input field after subscribing
      } else {
        alert("Please enter a valid email address.");
      }
    }

//     const orderNowButton = document.getElementById('order-now');
//    orderNowButton.addEventListener('click', () => {
//      orderNowButton.textContent = 'Order Placed!';
//    });