const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = contactForm.querySelector(
    'button[type="submit"]'
  );

  const originalText = button.textContent;

  const formData = new FormData(contactForm);
  const data = new URLSearchParams();

  data.append("name", formData.get("name") || "");
  data.append("email", formData.get("email") || "");
  data.append("message", formData.get("message") || "");

  // Show instant response
  alert("Thank you! Your message has been received.");

  // Reset form immediately
  contactForm.reset();

  // Send message to Google Sheet in the background
  button.disabled = true;
  button.textContent = "Sending...";

  fetch("https://script.google.com/macros/s/AKfycbwiNRbQ51DJfnhlnG_C6OqxSyDXrULcMe1WaPJzXdEB4pe87h_ciNEuA6PKMqeRTO4/exec", {
    method: "POST",
    body: data,
    mode: "no-cors"
  })
  .catch((error) => {
    console.error("Message sending failed:", error);
  })
  .finally(() => {
    button.disabled = false;
    button.textContent = originalText;
  });
});

