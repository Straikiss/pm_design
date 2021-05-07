var myLink = document.getElementById('hidden-link');
var myLink2 = document.getElementById('hidden-link-2');
var myElement = document.getElementById('hidden-element');
myLink.onclick = function(){myElement.style.transform = "translateX(0)";};
myLink2.onclick = function(){myElement.style.transform = "translateX(-100%)";};
var modal=document.getElementById("video-modal-1");
var modal=document.getElementById("video-modal-2");
var modal=document.getElementById("chat-modal-1");
window.onclick=function(a){if(a.target==modal){modal.style.display="none";}};
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
function OpenModalStart(){
  document.getElementById('start-modal').style.display='none';
  document.getElementById('video-modal-3').style.display='block';
}
function RateBloggers(){
  document.getElementById('start-modal').style.display='none';

  var ratebloggers = document.getElementById('ratebloggers');
  ratebloggers.scrollIntoView({block: 'center'})
}

function CloseModal(ModalName){
  document.getElementById(ModalName).style.display='none';
  document.getElementById(ModalName).addEventListener('click', () => {
    document.querySelectorAll('iframe').forEach(i => {
        let source = i.src;
        i.src = '';
        i.src = source;
    });
  });
}
function ChangeImage(Link){document.getElementById('ImagePost').src=Link;} 
function ChangeLink(Link){document.getElementById('ChangeLink').href=Link;}
function OpenModal(ModalName){document.getElementById(ModalName).style.display='block';}

function OpenAlert(AlertName)
{
  var Alert = document.getElementById(AlertName)
  Alert.className = 'alert-open'
  setTimeout(function()
  {
    Alert.className = Alert.className.replace('alert-open', '')
  }, 2000)
}

function NextStep(NextStepUrl)
{
  var Textarea = document.getElementById('textarea')
  var Input1 = document.getElementById('input-1')
  var Input2 = document.getElementById('input-2')

  if(Textarea.value == '') 
  {
    OpenAlert('alert-task')
    Textarea.scrollIntoView({block: 'center'})
    Textarea.focus()
  }
  else if(Input1.value == '' && Input2.value == '')
  {
    OpenAlert('alert-link')
    if(Input1.value == '')
    {
      Input1.scrollIntoView({block: 'center'})
      Input1.focus()
    }
    else
    {
      Input2.scrollIntoView({block: 'center'})
      Input2.focus()
    }
  }
  else 
    location.href = NextStepUrl
}

function PayMoney()
{
  var Input2 = document.getElementById('input-2')
  if(Input2.value < 500)
  {
    OpenAlert('alert-money-pay')
    Input2.value = '500'
    Input2.focus()
  }
}

function GetMoney()
{
  var Input = document.getElementById('input')
  if(Input.value == '')
    Input.focus()
  if(Input.value >=1 && Input.value <= 5000)
    OpenModal('request-modal')
  if(Input.value > 5000)
    OpenAlert('alert-money-false')
}

function CheckGetMoney()
{
  var InputRequest = document.getElementById('input-request')
  var Input = document.getElementById('input')
  if(InputRequest.value == '')
    InputRequest.focus()
  else
  {
    OpenAlert('alert-money-true')
    CloseModal('request-modal')
    Input.value = ''
  }
}

function SendPromo()
{
  var Textarea = document.getElementById('textarea')
  var Input = document.getElementById('input')
  if(Textarea.value == '')
    Textarea.focus()
  else if(Input.value == '')
    Input.focus()
  else 
  {
    CloseModal('chat-modal-1')
    OpenAlert('alert-send-promo')
  }
}

function AddMoreTarget(Value)
{
  var Target = document.getElementById('target')
  var TargetTwo = document.getElementById('target-2')
  if(Value.value == 1 || Value.value == 2)
    Target.style.display = 'block'
  else
  {
    Target.style.display = 'none'
    Target.value = ''
  }
  if(Value.value == 4)
    TargetTwo.style.display = 'block'
  else 
  {
    TargetTwo.style.display = 'none'
    TargetTwo.value = ''
  }
}