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
  console.log(products);
  const template = document.querySelector(".productTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h1.productName").textContent = products.name;
  copy.querySelector("img.productimg").src = products.photoOne;
  copy.querySelector("p.price").textContent = `${products.price} DKK`;

  const parent = document.querySelector("#product_list");
  parent.appendChild(copy);
}
