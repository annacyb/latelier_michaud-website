
function unhover_category(category) {
    let hover_element = category.children[0].children[1]
    console.log(hover_element)
    hover_element.classList.remove("category-hover-item")
    hover_element.classList.add("hidden")
   
    let text_underline = category.children[0].children[2]
    text_underline.classList.remove("hover_category")
}

function hover_category(category) {
    let hover_element = category.children[0].children[1]
    console.log(hover_element)
    hover_element.classList.remove("hidden")
    hover_element.classList.add("category-hover-item")

    let text_underline = category.children[0].children[2]
    text_underline.classList.add("hover_category")
}

function mobile_add_hover_element(category) {
    let hover_element = category.children[0].children[1]
    console.log(hover_element)
    hover_element.classList.remove("hidden")
    hover_element.classList.add("category-hover-item")
}



function listeners_on_categories() {
    let category1 = document.getElementById("category1")
    let category2 = document.getElementById("category2")
    let category3 = document.getElementById("category3")
    let category4 = document.getElementById("category4")

    const mediaQuery = window.matchMedia('(max-width: 700px)')
    if (mediaQuery.matches) {
        mobile_add_hover_element(category1)
        mobile_add_hover_element(category2)
        mobile_add_hover_element(category3)
        mobile_add_hover_element(category4)
    }
    else {    
    category1.addEventListener("mouseover", hover_category.bind(null, category1))
    category2.addEventListener("mouseover", hover_category.bind(null, category2))
    category3.addEventListener("mouseover", hover_category.bind(null, category3))
    category4.addEventListener("mouseover", hover_category.bind(null, category4))

    category1.addEventListener("mouseout", unhover_category.bind(null, category1))
    category2.addEventListener("mouseout", unhover_category.bind(null, category2))
    category3.addEventListener("mouseout", unhover_category.bind(null, category3))
    category4.addEventListener("mouseout", unhover_category.bind(null, category4))
    }
} 

listeners_on_categories()







