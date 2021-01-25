function openMenu() {
    var navID = document.getElementById("navLinks");
    if (navID.className === "navLinks__top") {
        navID.className += " responsive";
    } else {
        navID.className = "navLinks__top";
    }
}