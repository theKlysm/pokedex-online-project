const themeChangeButton = document.getElementById("change-theme-button"); //pass-1
const body = document.querySelector("body"); //pass-2
const themeChangeButtonImage = document.querySelector(".button-image"); //pass-5


themeChangeButton.addEventListener("click", () => {
    const activeDarkMode = body.classList.contains("dark-mode");
    
    body.classList.toogle("dark-mode"); //alternate the value of the class. Can substitute .add and .remove

    if(activeDarkMode){
        //console.log("dark-mode esta ativo");
        //body.classList.remove("dark-mode");
        themeChangeButtonImage.setAttribute("src", "./src/images/sun.png"); //pass-8
    } else {
        //body.classList.add("dark-mode");//pass-4

        themeChangeButtonImage.setAttribute("src", "./src/images/moon.png"); //pass-5
    }
}); //pass-3