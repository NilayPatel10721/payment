const text = "Freshers party payment";
const typingSpeed = 100;

let index = 0;
const brandTitle = document.getElementById("typing-effect");

function type() {
  if (index < text.length) {
    brandTitle.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  }
}

setTimeout(type, 1500);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  container.style.visibility = "visible";
});
const submitButton = document.getElementById("submitButton");
const page1Div = document.getElementById("page1");
const page2Div = document.getElementById("page2");
const cashRadio = document.getElementById("cash");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (cashRadio.checked) {
    page1Div.classList.add("page1-hidden");

    setTimeout(() => {
      page1Div.style.display = "none";
      page2Div.style.display = "block";
      page2Div.scrollIntoView({ behavior: "smooth" });
    }, 500); // 500 milliseconds (0.5 seconds) delay
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nextPageButton = document.getElementById("nextButton");

  // Add an event listener to the "NEXT" button
  nextPageButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Submit the form
    form.submit();
  });
});

const formId =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5cHXVWWaGDjoQvlusTxGJXCpCyE9Pd5sOOKABd24glejbwg/formResponse";
const formURL = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const formData = {
  "entry.1405314269": "John Doe", // Replace with your form field names and values
  "entry.815742534": "1234567890",
  "entry.1299154542": "Credit Card",
};

const encodedParams = Object.keys(formData)
  .map(
    (key) => encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
  )
  .join("&");

fetch(formURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  body: encodedParams,
})
  .then((response) => {
    if (response.ok) {
      console.log("Form submitted successfully.");
    } else {
      console.error("Form submission failed.");
    }
  })
  .catch((error) => console.error("Error:", error));

const submitButton1 = document.getElementById("submitButton");
const page1Div1 = document.getElementById("page1");
const page3Div = document.getElementById("page3"); // Changed to page3Div
const onlinePaymentRadio = document.getElementById("online-payment"); // Changed to onlinePaymentRadio

submitButton1.addEventListener("click", function (event) {
  event.preventDefault();

  if (onlinePaymentRadio.checked) {
    // Changed to onlinePaymentRadio.checked
    page1Div.classList.add("page1-hidden");

    setTimeout(() => {
      page1Div1.style.display = "none";
      page3Div.style.display = "block"; // Changed to page3Div
      page3Div.scrollIntoView({ behavior: "smooth" });
    }, 500); // 500 milliseconds (0.5 seconds) delay
  }
});
