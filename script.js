const text = "Freshers party payment";
const typingSpeed = 100; // Speed of typing in milliseconds

let index = 0;
const brandTitle = document.getElementById("typing-effect");

function type() {
  if (index < text.length) {
    brandTitle.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

type();
