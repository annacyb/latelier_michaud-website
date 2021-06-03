const url1 = "https://kea21s-9328.restdb.io/rest/products?max=3";

/*API key*/
const options1 = {
  headers: {
    "x-apikey": "602e2b3b5ad3610fb5bb6298",
  },
};

fetch(url1, options1)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((dataa) => {
    handleRec(dataa);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleRec(data1) {
  console.log(data1);
  data1.forEach(showProduct);
}

function showProduct(data1, url1) {
  //grab the template
  const product_template = document.querySelector(
    "template.sect2-product-template"
  ).content;

  //clone it
  const myCopy = product_template.cloneNode(true);
  //change content

  myCopy.querySelector("p.product-name").textContent = data1.name;
  myCopy.querySelector("p.product-name").alt = data1.name;
  myCopy.querySelector("p.price").textContent = data1.price + " DKK";
  myCopy.querySelector("img.img-product").src = data1.photoOne;

  myCopy.querySelector(
    "#productlistLink"
  ).href = `../product-view.html?id=${data1._id}`;

  //grab parent
  const parent = document.querySelector("#our_jewellery-grid");

  //append
  parent.appendChild(myCopy);
}
