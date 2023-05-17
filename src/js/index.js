const themeChangeButton = document.getElementById("theme-change-button"); //pass-1

const body = document.querySelector("body"); //pass-2

const themeChangeButtonImage = document.querySelector(".button-image");

themeChangeButton.addEventListener("click", () => {
    body.classList.add("dark-mode");//pass-4
    themeChangeButtonImage,setAttribute("src", "./")

});//pass-3
