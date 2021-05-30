// Section 1- Hero section (slider)


function click_slider_dots(dot){
    let dot_id = dot.id


    if (dot_id.includes("1")) {
        
         // hide dot 2

         let slider2text = document.getElementById("slider2-text")
         slider2text.classList.add("hidden")
 
         let slider2image = document.getElementById("slider2-image")
         slider2image.classList.add("hidden")
 
         let dot2 = document.getElementById("slider-dot2")
         dot2.classList.add("hidden")
         dot2.classList.add("dot")
         dot2.classList.remove("dot-filled")
 
 
         // hide dot 3
 
         let slider3text = document.getElementById("slider3-text")
         slider3text.classList.add("hidden")
 
         let slider3image = document.getElementById("slider3-image")
         slider3image.classList.add("hidden")
 
         let dot3 = document.getElementById("slider-dot3")
         dot3.classList.add("hidden")
         dot3.classList.add("dot")
         dot3.classList.remove("dot-filled")

         // show dot1

        let slider1text = document.getElementById("slider1-text")
        slider1text.classList.remove("hidden")

        let slider1image = document.getElementById("slider1-image")
        slider1image.classList.remove("hidden")

        let dot1 = document.getElementById("slider-dot1")
        dot1.classList.remove("hidden")
        dot1.classList.add("dot-filled")

    }
    if (dot_id.includes("2")) {

        // hide dot 1

        let slider1text = document.getElementById("slider1-text")
        slider1text.classList.add("hidden")
        // slider1text.classList.add("fade_out")

        let slider1image = document.getElementById("slider1-image")
        slider1image.classList.add("hidden")
        // slider1text.classList.add("fade_out")

        let dot1 = document.getElementById("slider-dot1")
        dot1.classList.add("hidden")
        dot1.classList.add("dot")
        dot1.classList.remove("dot-filled")


        // hide dot 3

        let slider3text = document.getElementById("slider3-text")
        slider3text.classList.add("hidden")

        let slider3image = document.getElementById("slider3-image")
        slider3image.classList.add("hidden")

        let dot3 = document.getElementById("slider-dot3")
        dot3.classList.add("hidden")
        dot3.classList.add("dot")
        dot3.classList.remove("dot-filled")



        // show dot2

        let slider2text = document.getElementById("slider2-text")
        // slider1text.classList.add("fade_in")
        slider2text.classList.remove("hidden")

        let slider2image = document.getElementById("slider2-image")
        slider2image.classList.remove("hidden")
        // slider1text.classList.add("fade_in")

        let dot2 = document.getElementById("slider-dot2")
        dot2.classList.remove("hidden")
        dot2.classList.add("dot-filled")

    

    }
    if (dot_id.includes("3")) {

        
        // hide dot 1

        let slider1text = document.getElementById("slider1-text")
        slider1text.classList.add("hidden")

        let slider1image = document.getElementById("slider1-image")
        slider1image.classList.add("hidden")

        let dot1 = document.getElementById("slider-dot1")
        dot1.classList.add("hidden")
        dot1.classList.add("dot")
        dot1.classList.remove("dot-filled")


        // hide dot 2

        let slider2text = document.getElementById("slider2-text")
        slider2text.classList.add("hidden")

        let slider2image = document.getElementById("slider2-image")
        slider2image.classList.add("hidden")

        let dot2 = document.getElementById("slider-dot2")
        dot2.classList.add("hidden")
        dot2.classList.add("dot")
        dot2.classList.remove("dot-filled")



        // show dot3

        let slider3text = document.getElementById("slider3-text")
        slider3text.classList.remove("hidden")

        let slider3image = document.getElementById("slider3-image")
        slider3image.classList.remove("hidden")

        let dot3 = document.getElementById("slider-dot3")
        dot3.classList.remove("hidden")
        dot3.classList.add("dot-filled")

    
    }
}




function setup_listeners_slider_dots() {
    let dot1 = document.getElementById("slider-dot1")
    let dot2 = document.getElementById("slider-dot2")
    let dot3 = document.getElementById("slider-dot3")

    dot1.addEventListener("click", click_slider_dots.bind(null, dot1))
    dot2.addEventListener("click", click_slider_dots.bind(null, dot2))
    dot3.addEventListener("click", click_slider_dots.bind(null, dot3))
}


setup_listeners_slider_dots()