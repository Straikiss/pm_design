var btnContainer = document.getElementById("Buttons");
var btns = btnContainer.getElementsByClassName("create-company-change-type");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("create-company-change-type-active");
    current[0].className = current[0].className.replace(" create-company-change-type-active", "");
    this.className += " create-company-change-type-active";
    });
}