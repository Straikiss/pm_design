var btnContainer = document.getElementById("Buttons");
var btn = btnContainer.getElementsByClassName("create-company-change-type-2");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("create-company-change-type-active-2");
    current[0].className = current[0].className.replace(" create-company-change-type-active-2", "");
    this.className += " create-company-change-type-active-2";
    });
}