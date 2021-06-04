const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements.email.value);

  const payload = {
    email: form.elements.email.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea21s-9328.restdb.io/rest/newsletter", {
    method: "POST",
    headers: {
      "x-apikey": "602e2b3b5ad3610fb5bb6298",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.email.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
});
