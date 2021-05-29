// Section 2- Our jewellery



function fetchNewIn() {
    const url = "https://kea21s-9328.restdb.io/rest/products?q=%7B%22newIn%22%3A%20true%7D"
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
        console.log(response)
        //   console.log("reset1")
        //   resetProducts()
        response.forEach(product => {
            showProduct(product, url)
        })
        //   setup_wishlist_listener()
    })
    .catch(err => {
        console.error(err)
    })
}

function showProduct(data, url) {
     //grab the template
     const product_template = document.querySelector("template.sect2-product-template").content
     console.log(product_template)
 
     //clone it
     const myCopy = product_template.cloneNode(true);
     //change content
 
     myCopy.querySelector("p.product-name").textContent = data.name
     myCopy.querySelector("p.product-name").alt = data.name
     myCopy.querySelector("p.price").textContent = data.price + " DKK"
     myCopy.querySelector("img.img-product").src = data.photoOne
    
 
     myCopy.querySelector("#productlistLink").href = `../product-view.html?id=${data._id}`;
         
 
     //grab parent
     const parent = document.querySelector("#our_jewellery-grid")
     // console.log(parent)
 
     //append
     parent.appendChild(myCopy)
}

fetchNewIn()