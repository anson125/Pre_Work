var box = document.getElementById("box")

document.getElementById("growBtn").addEventListener("click", function(){

    box.style.height = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    box.style.backgroundColor = "blue";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    box.style.display = "none";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    box.style.height = "150px";
    box.style.backgroundColor = "orange";
    box.style.display = "block";

});