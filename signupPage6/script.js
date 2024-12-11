function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

// JavaScript to handle form submission and animations
    document.getElementById("sendLetter").addEventListener("click", function() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.querySelector("textarea").value;

      // Here you could add AJAX or form submission logic

      // Show result message and trigger animations
      document.querySelector(".result-message").style.opacity = 1;
      document.querySelector(".result-message").style.transform = "translateY(12rem)";
      
      // Animate the letter and envelope
      document.querySelector(".letter").classList.add("sent");
      });