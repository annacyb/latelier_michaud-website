
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