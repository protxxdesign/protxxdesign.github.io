function hamburgertransform(x) {
    x.classList.toggle("change");

    var y = document.getElementById("hamburgernav");
    if (y.style.display === "none") {
    	y.style.display = "block";
    }
    else {
    	y.style.display = "none";
    }
}