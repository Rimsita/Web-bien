function myFunction() {
    var x = document.getElementById("wrap");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}