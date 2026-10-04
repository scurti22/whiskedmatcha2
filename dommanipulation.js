document.getElementsByClassName("hero-image")[0]
    .getElementsByTagName("img")[0].src = "Images/cat with a tie.jpg";

document.getElementsByClassName("hero-content")[0].innerHTML = 
    "<-- connect with him on linkedin";

let newEL = document.getElementsByClassName("hero-content")[0];

newEL.style.fontsize = "40px";
