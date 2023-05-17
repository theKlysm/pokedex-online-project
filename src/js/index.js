const themeChangeButton = document.getElementById("change-theme-button"); //pass-1

const body = document.querySelector("body"); //pass-2

const themeChangeButtonImage = document.querySelector(".button-image");//pass-5

const activeDarkMode = body.classList.contains("dark-mode");

themeChangeButton.addEventListener("click", () => {
    body.classList.add("dark-mode");//pass-4

    themeChangeButtonImage.setAttribute("src", "./src/images/moon.png");//pass-5

    if(activeDarkMode){
        //console.log("dark-mode esta ativo");
    };//pass-6
});//pass-3