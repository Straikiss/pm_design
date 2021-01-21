var ButtonsContainer = document.getElementById("Buttons");
var Buttons = ButtonsContainer.getElementsByClassName("create-company-change-type");
var Buttons2 = ButtonsContainer.getElementsByClassName("create-company-change-type-2");



for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("create-company-change-type-active");
    current[0].className = current[0].className.replace(" create-company-change-type-active", "");
    this.className += " create-company-change-type-active";
  });
}





for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("create-company-change-type-active-2");
    current[0].className = current[0].className.replace(" create-company-change-type-active-2", "");
    this.className += " create-company-change-type-active-2";
  });
}