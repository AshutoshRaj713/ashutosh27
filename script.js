const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxiFvBKni1JxvhP5NP70BxH-AAs2QncOdW9XoI9MLVos5fEnlpnIYVaEfb1B1Xz3rD5_A/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      alert("Message sent successfully 🚀");
      form.reset();
    })
    .catch(function (err) {
      alert("Something went wrong ❌");
      console.error(err);
    });
});

