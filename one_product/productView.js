const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =
  "https://kea21s-9328.restdb.io/rest/products/60b2349860d0d67b00020dc7";

// const url = "https://kea21s-9328.restdb.io/rest/products/" + id;
// const mediaurl = "https://kea2021-907c.restdb.io/media/";

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
  document.querySelector(".description li").textContent = product.description;

  if (product.materialType) {
    document.querySelector(".material h3:nth-child(1)").classList.add("cross");
  } else {
    document.querySelector(".material h3:nth-child(3)").classList.add("cross");
  }

  // document.querySelector(".addCart2").addEventListener("click", () => {
  //   //alert("hey!");
  //   //console.log(bags);
  //   CART.add(bags);
  // });
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
