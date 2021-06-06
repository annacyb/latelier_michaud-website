const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21s-9328.restdb.io/rest/products/" + id;

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

function handleProducts(product) {
  //console.log(bags);
  document.querySelector(".priceName h2").textContent = product.name;
  document.querySelector(".priceName p").textContent = `${product.price} DKK`;
  // document.querySelector(".list li").textContent = bags.material;
  document.querySelector(".first").src = product.photoOne;
  document.querySelector(".second").src = product.photoTwo;
  document.querySelector(".third").src = product.photoThree;
  document.querySelector(".dropdown p").textContent = product.description;

  if (product.materialType) {
    document.querySelector(".material h3:nth-child(1)").classList.add("cross");
  } else {
    document.querySelector(".material h3:nth-child(3)").classList.add("cross");
  }

  document.querySelector(".addCart").addEventListener("click", () => {
    //console.log(bags);
    alert("Added to cart");
    CART.add(product);
  });
}

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 10000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  //
});

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const CART = {
  KEY: "basket",
  contents: [],
  init() {
    //contents is a temporary string

    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      // if there's anything there, turn it into 20 objects that we can access with the dot . notation
      CART.contents = JSON.parse(_contents);
    } else {
      /*CART.contents = [
        {
          _id: "608187eb3e28515100031d8f",
          qty: 5,
          collection: "",
          colour: "Blue",
          description:
            "Ulrikke Woven Satin is a new shoulder bag with a shiny twist",
          dimensions: "Dimensions: 30 x 6 x 20 cm.",
          material: "Material: 100 % Polyester",
          name: "ULRIKKE WOVEN SATIN",
          newProducts: true,
          outOfStock: false,
          photo:
            "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-blue.jpg",
          photoOne:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-blue-top.jpg",
          photoThree: "",
          photoTwo:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-statin-blue-side.jpg",
          price: 499,
          sale: false,
          salePrice: "",
          typeOfTheBag: "BumbagsandCrossbodybags",
        },
        {
          _id: "608188303e28515100031d9a",
          qty: 3,
          collection: "",
          colour: "Beige",
          description:
            "Ulrikke Woven Satin is a new crossbody bag with a shiny twist",
          dimensions: "Dimensions: 30 x 6 x 20 cm.",
          material: "Material: 100 % Polyester",
          name: "ULRIKKE WOVEN SATIN",
          newProducts: true,
          outOfStock: false,
          photo:
            "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-beige.jpg",
          photoOne:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-side.jpg",
          photoThree:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-model.jpg",
          photoTwo:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-top.jpg",
          price: 499,
          sale: false,
          salePrice: "",
          typeOfTheBag: "BumbagsandCrossbodybags",
        },
      ];*/
    }
    // I want to update the
    //this.updateDOM(); use this when we're not hardcoding the contents, and the content is read from localStorage
    CART.sync();
  },
  sync() {
    //turn CART contents array of objects into a string that we can write in localStorage
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
    CART.updateDOM();
  },
  updateDOM() {
    const cartcontentEl = document.querySelector(".cartContent");
    cartcontentEl.innerHTML = "";

    if (CART.contents.length === 0) {
      cartcontentEl.innerHTML = "<h2>The cart is empty</h2>";
      document.querySelector(".lineL").classList.add("hidden");
      document.querySelector(".orderPrice").classList.add("hidden");
      document.querySelector(".itemsTwo").classList.add("hidden");
    } else {
      CART.contents.forEach((element) => {
        const tempItem = document.querySelector("#cartTemplate").content;
        //console.log(element);
        const itemCopy = tempItem.cloneNode(true);

        const bagID = element._id;
        itemCopy.querySelector(".bagName").textContent = element.name;
        itemCopy.querySelector("label").setAttribute("for", "fid-" + bagID);

        const minusBtn = itemCopy.querySelector(".minus");
        minusBtn.addEventListener("click", () => {
          CART.minusOne(bagID);
        });

        itemCopy.querySelector("input").id += bagID;
        itemCopy.querySelector("input").name += bagID;
        itemCopy.querySelector("input").value = element.qty;

        itemCopy.querySelector("input").addEventListener("blur", () => {
          const itemQty = itemCopy.querySelector("input").valueAsNumber;
          element.qty = itemQty;
          console.log("element");
          console.log(element);
          CART.update(element);
        });

        itemCopy.querySelector("input").addEventListener("focus", (e) => {
          e.target.select();
        });

        const plusBtn = itemCopy.querySelector(".plus");
        plusBtn.addEventListener("click", () => {
          CART.plusOne(bagID);
        });

        itemCopy.querySelector("img").src = element.photoOne;
        itemCopy.querySelector(".bagColor").textContent = element.material;
        itemCopy.querySelector(".bagproductPrice").textContent = element.price;

        cartcontentEl.appendChild(itemCopy);
      });
    }
  },
  add(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }

    console.log(CART.contents);
    this.sync();
  },
  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    /*const inputEl = document.querySelector("#fid-" + obj._id);
    CART.contents[index].qty = inputEl.valueAsNumber;*/

    if (obj.qty === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }

    CART.sync();
  },
  minusOne(bagID) {
    const indexObj = CART.contents.find((element) => element._id == bagID);
    indexObj.qty--;
    console.log(indexObj);
    CART.update(indexObj);
  },
  plusOne(bagID) {
    const indexObj = CART.contents.find((element) => element._id == bagID);
    indexObj.qty++;
    console.log(indexObj);
    CART.update(indexObj);
  },
};

CART.init();
