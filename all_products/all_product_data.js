
function fetchAll() {
    const url = "https://kea21s-9328.restdb.io/rest/Products?"
    const header = {
        "method": "GET",
        "headers": {
            "x-apikey": "602e2b3b5ad3610fb5bb6298",
            "Content-Type": "application/json"
            }
        }

    fetch(url, header)
        .then((res) => res.json())
        .then(response => {
            // console.log(response)
            console.log("reset1")
            resetProducts()
            response.forEach(product => {
                showProduct(product)
            })
            setup_wishlist_listener()
        })
        .catch(err => {
            console.error(err)
        })

}



const url = "https://kea21s-9328.restdb.io/rest/Products?"

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
    handleProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

  function handleProducts (data) {
    // console.log (data);
    data.forEach (showProducts);
  }


function showProducts(products) {
    console.log(products);
    const template = document.querySelector("#productTemplate").textContent;

const copy = template.cloneNode(true);

    document.querySelector("h1.productName").textContent = products.name;
    document.querySelector("img.productimg").src = products.photoOne;
    document.querySelector("p.price").textContent = `${products.price} DKK`

  }
  