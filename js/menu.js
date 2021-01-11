var myLink = document.getElementById('hidden-link');
var myLink2 = document.getElementById('hidden-link-2');
var myElement = document.getElementById('hidden-element');

myLink.onclick = function(){
  myElement.style.transform = "translateX(0)";
};

myLink2.onclick = function(){
  myElement.style.transform = "translateX(-100%)";
};