const text1 = "Fresher party";
const text2 = "Payment";
const typingSpeed = 100;

let index1 = 0;
let index2 = 0;
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

function type() {
  if (index1 < text1.length) {
    line1.textContent += text1.charAt(index1);
    index1++;
    setTimeout(type, typingSpeed);
  } else if (index2 < text2.length) {
    line2.textContent += text2.charAt(index2);
    index2++;
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
    event.preventDefault();
    showTransitionUPI(); // Prevent the default form submission

    // Submit the form
    form.submit();
  });
});

const formId =
  "https://docs.google.com/forms/d/e/1FAIpQLSc5cHXVWWaGDjoQvlusTxGJXCpCyE9Pd5sOOKABd24glejbwg/formResponse";
const formURL = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const formData = {
  "entry.1405314269": "John Doe", // Replace with your form field names and values
  "entry.815742534": "1234567890",
  "entry.1014591765": "full-name",
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
const box1Div = document.getElementById("box1");

box1Div.style.display = "none";

submitButton1.addEventListener("click", function (event) {
  event.preventDefault();

  if (onlinePaymentRadio.checked) {
    // Changed to onlinePaymentRadio.checked
    page1Div.classList.add("page1-hidden");

    setTimeout(() => {
      page1Div1.style.display = "none";
      box1Div.style.display = "block";
      page3Div.style.display = "block"; // Changed to page3Div
      page3Div.scrollIntoView({ behavior: "smooth" });
      box1Div.scrollIntoView({ behavior: "smooth" });
    }, 500);
    // 500 milliseconds (0.5 seconds) delay
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nextPageButton = document.getElementById("lastbtn");

  nextPageButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Prevent the default form submission

    // Log a message to confirm the button click
    console.log("Last button clicked. Submitting form...");

    // Submit the form
    form.submit();
  });
});

var submitted = false;

const form = document.getElementById("myForm");
const buttons = form.querySelectorAll('button[type="submit"]');

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    submitted = true;
  });
});

// function submitForm() {
//   // Assuming your form has the ID 'myForm'
//   const form = document.getElementById("myForm");

//   // Change the form action URL
//   form.action = "https://www.google.com/forms/about/"; // Replace NEW_FORM_ACTION_URL with the desired URL
//   form.submit();
// }

// var submitted = false;

// // Create an iframe to handle the form submission
// const hiddenConfirm = document.createElement("iframe");
// hiddenConfirm.name = "hiddenConfirm";
// hiddenConfirm.id = "hiddenConfirm";
// hiddenConfirm.style.display = "none";
// hiddenConfirm.onload = function () {
//   if (submitted) {
//     window.location = "payy.html";
//   }
// };
// document.body.appendChild(hiddenConfirm);

// // Update the form submission handler to set submitted to true
// document.getElementById("myForm").addEventListener("submit", function () {
//   submitted = true;
// });
