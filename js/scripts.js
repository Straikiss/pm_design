var ButtonsContainer = document.getElementById("Buttons");
var ButtonsContainer2 = document.getElementById("Buttons");
var Buttons = ButtonsContainer.getElementsByClassName("create-company-change-type");
var Buttons2 = ButtonsContainer2.getElementsByClassName("create-company-change-type-2");
var Current = document.getElementsByClassName("create-company-change-type-active");
var Current2 = document.getElementsByClassName("create-company-change-type-active-2");

for(var i = 0; i < Buttons.length; i++){
    Buttons[i].addEventListener("click", function(){
    Current[0].className = Current[0].className.replace(" create-company-change-type-active", "");
    this.className += " create-company-change-type-active";
  });
}

for(var i = 0; i < Buttons2.length; i++){
    Buttons2[i].addEventListener("click", function(){
    Current2[0].className = Current2[0].className.replace(" create-company-change-type-active-2", "");
    this.className += " create-company-change-type-active-2";
  });
}
