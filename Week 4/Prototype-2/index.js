var modal = document.getElementsByClassName('modal')[0];
var btn = document.getElementsByClassName("sidebar")[0];
var btnMobile = document.getElementsByClassName("submit-mobile")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btnMobile.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}