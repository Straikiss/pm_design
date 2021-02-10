var myLink = document.getElementById('hidden-link');
var myLink2 = document.getElementById('hidden-link-2');
var myElement = document.getElementById('hidden-element');
myLink.onclick = function(){myElement.style.transform = "translateX(0)";};
myLink2.onclick = function(){myElement.style.transform = "translateX(-100%)";};
var modal=document.getElementById("video-modal-1");
var modal=document.getElementById("video-modal-2");
var modal=document.getElementById("chat-modal-1");
window.onclick=function(a){if(a.target==modal){modal.style.display="none";}};
function ChangeImage1(){document.getElementById('ImagePost').src="img/company/post/1.png";} 
function ChangeImage2(){document.getElementById('ImagePost').src="img/company/post/2.png";} 
function ChangeImage3(){document.getElementById('ImagePost').src="img/company/post/3.png";} 
function ChangeImage4(){document.getElementById('ImagePost').src="img/company/post/4.png";} 
function ChangeLinkAuto(){document.getElementById('ChangeLink').href="create-company-auto-1.html";} 
function ChangeLinkManual(){document.getElementById('ChangeLink').href="create-company-manual-1.html";} 
function ChangeLinkPro(){document.getElementById('ChangeLink').href="create-company-pro-1.html";} 
function ChangeLinkCpa(){document.getElementById('ChangeLink').href="create-company-cpa-1.html";} 
function ImagePreviewShow(){
document.getElementById('ChangeImagePreviewHide').style.display = "block";
document.getElementById('BlockCreateBlogger').style.display = "block";
document.getElementById('BlockCreateSelf').style.display = "none";
} 
function ImagePreviewHide(){
document.getElementById('ChangeImagePreviewHide').style.display = "none";
document.getElementById('BlockCreateSelf').style.display = "block";
document.getElementById('BlockCreateBlogger').style.display = "none";
} 
function ChangeCofusTap(){
  document.getElementById('ChangeFocus').placeholder = '15';
  document.getElementById('ChangeImagePreviewHide').style.display = "none";
} 
function ChangeCofusFocus(){
  document.getElementById('ChangeFocus').placeholder = '50';
  document.getElementById('ChangeImagePreviewHide').style.display = "block";
} 
function openbox(pClass){
var elems = document.getElementsByClassName(pClass);
for(var i=0; i < elems.length; i++){var display = elems[i].style.display;if(display=='none')
{elems[i].style.display='block';}else{elems[i].style.display='none';}}}

function ShowMoreStory(){
  var checkBox = document.getElementById("CampTypeMoreStory");
  var text = document.getElementById("CampTypeMoreStoryOpened");
  if(checkBox.checked == true){text.style.display = "block";}else{text.style.display = "none";}
}
function StoryPreviewShow(){
  document.getElementById('ShowMoreStoryButtonOpened').style.display = "none";
  document.getElementById('ShowMoreStoryButtonOpened').style.display = "block";
} 
function StoryPreviewHide(){
  document.getElementById('ShowMoreStoryButtonOpened').style.display = "block";
  document.getElementById('ShowMoreStoryButtonOpened').style.display = "none";
}