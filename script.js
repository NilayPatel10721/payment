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

function submitForm() {
  const formUrl =
    "https://codersblock.com/blog/creating-glow-effects-with-css/#:~:text=By%20adding%20inset%20to%20your%20box-shadow%20declaration%2C%20you,div%20%7B%20width%3A%20400px%3B%20height%3A%20200px%3B%20background-color%3A%20%23fff%3B";

  const fullName = document.getElementById("fullNameInput").value;
  const whatsappNumber = document.getElementById("whatsappInput").value;
  const paymentMethod = document.querySelector(
    'input[name="entry.1299154542"]:checked'
  ).value;

  const formData = new FormData();
  formData.append("entry.1405314269", fullName);
  formData.append("entry.815742534", whatsappNumber);
  formData.append("entry.1299154542", paymentMethod);

  // Send a POST request to the Google Form URL
  fetch(formUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors", // Set mode to no-cors for a simple POST request without handling response
  })
    .then(() => {
      // Handle success
      console.log("Form submitted successfully!");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error submitting the form:", error);
    });
}

function submitForm() {
  // Assuming your form has the ID 'myForm'
  const form = document.getElementById("myForm");
  form.submit();
}
