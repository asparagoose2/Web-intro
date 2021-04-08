colors = ["green", "red", "blue", "yellow", "hotpink", "black" , "purple", "gray"]


changeTitle = function () {
    document.getElementById("pageTitle").innerHTML = document.getElementById("pageTitle").innerHTML === "ofir" ? "shoval" : "ofir";
}

changeColor = function () {
    document.getElementById("pageTitle").style.color = colors[Math.floor(Math.random() * 8)];
    
}