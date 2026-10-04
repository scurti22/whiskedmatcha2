document.getElementsByClassName("hero-image")[0]
    .getElementsByTagName("img")[0].src = "Images/cat with a tie.jpg";

document.getElementsByClassName("hero-content").innerHTML = 
    "<-- this is a cat";

document.querySelector(".hero-content p").innerHTML =
    "connect with him on linkedin";