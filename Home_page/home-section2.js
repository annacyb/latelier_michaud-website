// Section 2- Our jewellery


function resetFilterProducts(){
    container_product_list = document.querySelector("#our_jewellery-grid")
    let products = [...container_product_list.children]
    
    // removes first element from the array (in this case template article)
    products = products.slice(1)
    
    products.forEach((product) => {
        product.remove()
    })
}


function load_data_newIn_or_mostPopular(newIn_filter) {

    let url = ''
    if (newIn_filter == true) {
        url = `https://kea21s-9328.restdb.io/rest/products?q=%7B%22newIn%22%3A%20true%7D`
    }
    else {
        url = `https://kea21s-9328.restdb.io/rest/products?q=%7B%22mostPopular%22%3A%20true%7D`
    }
    //WIECEJ OPCJI TUTAJ? dodac zmienna mostPopular = T/F

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
            response.forEach(product => {
                showProduct(product, url)
            })
        })
        .catch(err => {
            console.error(err)
        })

}


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
        // console.log(response)
        response.forEach(product => {
            showProduct(product, url)
        })
    })
    .catch(err => {
        console.error(err)
    })
}

function fetchMostPopular(){
    const url = "https://kea21s-9328.restdb.io/rest/products?q=%7B%22mostPopular%22%3A%20true%7D"
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
        response.forEach(product => {
            showProduct(product, url)
        })
    })
    .catch(err => {
        console.error(err)
    })
}


function showProduct(data, url) {
     //grab the template
     const product_template = document.querySelector("template.sect2-product-template").content
 
     //clone it
     const myCopy = product_template.cloneNode(true);
     //change content
 
     myCopy.querySelector("p.product-name").textContent = data.name
     myCopy.querySelector("p.product-name").alt = data.name + " image"
     myCopy.querySelector("p.price").textContent = data.price + " DKK"
     myCopy.querySelector("img.img-product").src = data.photoOne
    
 
     myCopy.querySelector("#productlistLink").href = `../one_product/one_product.html?id=${data._id}`;
         
 
     //grab parent
     const parent = document.querySelector("#our_jewellery-grid")
 
     //append
     parent.appendChild(myCopy)
}


function click_filter(filter_button) {

    if (filter_button.id == 'filter1') {
        newIn_filter = true

        let unselected_button = document.querySelector("#filter2")
        unselected_button.classList.remove("selected_filter")

        let selected_button = document.querySelector("#filter1")
        selected_button.classList.remove("selected_filter")
        selected_button.classList.add("selected_filter")

    }
    if (filter_button.id == 'filter2'){
        newIn_filter = false

        let unselected_button = document.querySelector("#filter1")
        unselected_button.classList.remove("selected_filter")

        let selected_button = document.querySelector("#filter2")
        selected_button.classList.remove("selected_filter")
        selected_button.classList.add("selected_filter")
    }

    resetFilterProducts()
    load_data_newIn_or_mostPopular(newIn_filter)

}


function listeners_filters() {
    let filter1 = document.getElementById("filter1")
    let filter2 = document.getElementById("filter2")
    
    filter1.addEventListener("click", click_filter.bind(null, filter1))
    filter2.addEventListener("click", click_filter.bind(null, filter2))
} 


function main() {
    fetchNewIn()
    listeners_filters()
}

let newIn_filter = true
main()