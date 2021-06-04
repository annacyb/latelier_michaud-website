var url = "https://kea21s-9328.restdb.io/rest/products?";

/*API key*/
const options = {
  headers: {
    "x-apikey": "602e2b3b5ad3610fb5bb6298",
  },
};

function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "x-apikey": "602e2b3b5ad3610fb5bb6298",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showProducts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function showProducts(products) {
  const parent = document.querySelector("#product_list");
  const template = document.querySelector(".productTemplate").content;

  // reset product list
  parent.innerHTML = "";

  // populate product list
  for (const product of products) {
    // add product to product list
    const copy = template.cloneNode(true);

    copy.querySelector("h1.productName").textContent = product.name;
    copy.querySelector("img.productimg").src = product.photoOne;
    copy.querySelector("p.price").textContent = `${product.price} DKK`;

    parent.appendChild(copy);
  }
}

//FILTER//
document
  .querySelector("select.productType")
  .addEventListener("change", handleSelect);
document
  .querySelector("select.collection")
  .addEventListener("change", handleSelectCollection);
document
  .querySelector("select.sortBy")
  .addEventListener("change", handleSelectSortBy);

function handleSelect(evt) {
  console.log(evt.target.value);
  if (evt.target.value == null) return;

  if (evt.target.value === "Show all") {
    url = `https://kea21s-9328.restdb.io/rest/products?`;
  } else {
    url = `https://kea21s-9328.restdb.io/rest/products?&q={"type":"${evt.target.value}"}`;
  }
  getData();
}

function handleSelectCollection(evt) {
  console.log(evt.target.value);
  if (evt.target.value == null) return;

  if (evt.target.value === "Show all") {
    url = `https://kea21s-9328.restdb.io/rest/products?`;
  } else {
    url = `https://kea21s-9328.restdb.io/rest/products?&q={"collection":"${evt.target.value}"}`;
  }
  getData();
}

function handleSelectSortBy(evt) {
  console.log(evt.target.value);
  if (evt.target.value == null) return;

  if (evt.target.value === "Show all") {
    url = `https://kea21s-9328.restdb.io/rest/products?`;
  } else {
    url = `https://kea21s-9328.restdb.io/rest/products?&q={"type":"${evt.target.value}"}`;
  }
  getData();
}

getData();
