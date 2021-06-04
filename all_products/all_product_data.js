const url = "https://kea21s-9328.restdb.io/rest/products?";

/*API key*/
const options = {
  headers: {
    "x-apikey": "602e2b3b5ad3610fb5bb6298",
  },
};

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

function showProducts(products) {
  const template = document.querySelector(".productTemplate").content;

  for (const product of products) {
    const copy = template.cloneNode(true);

    copy.querySelector("h1.productName").textContent = product.name;
    copy.querySelector("img.productimg").src = product.photoOne;
    copy.querySelector("p.price").textContent = `${product.price} DKK`;

    const parent = document.querySelector("#product_list");
    parent.appendChild(copy);
  }
}
