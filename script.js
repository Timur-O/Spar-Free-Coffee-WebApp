window.addEventListener("load", (event) => {
    // To go full-screen ("hacky")
    window.scrollTo(0, 1);
    document.addEventListener('contextmenu', event => event.preventDefault());

    const circle_image = document.getElementById("circle_image");
    const flash = document.getElementById("flash");
    
    const hideFlash = () => {
        flash.classList.add("hidden");
    }
    
    const makeFlashGreen = () => {
        flash.firstElementChild.classList.add("box_siren_green");
        flash.firstElementChild.classList.add("box_siren_step1_green");
        flash.firstElementChild.classList.remove("box_siren_pink");
        flash.firstElementChild.classList.remove("box_siren_step1_pink");

        document.getElementById("circle_image").setAttribute("src", "pending_circle.png");

        setTimeout(switchToSuccess, 2000);
    }
    
    const switchToSuccess = () => {
        hideFlash();
        document.getElementById("circle_image").setAttribute("src", "success_circle.png"); 
        document.getElementById("shop_assistant_text").classList.add("hidden");

        circle_image.removeEventListener("click", makeFlashGreen)
    };

    circle_image.addEventListener("click", makeFlashGreen);
});