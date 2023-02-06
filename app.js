
var answer = document.getElementById("question-ask");

function createAlert(e) {
    var x = e.keyCode;
    switch (x) {
      case 63:
        getApiContent();
        goBack();
        hide();
        console.log('success');
    }
    console.log(x);
  }
document.addEventListener('keydown', createAlert);

const urll = 'https://yesno.wtf/api';
let localUrl = 'http://127.0.0.1:5500/';

const apiContentList = [];

function getApiContent(){
  fetch('https://yesno.wtf/api')
  .then(response => response.json())
  .then(data => {                 
    if(data){
      apiContentList.push(data);
    }
    console.log(data.image)
    console.log(data.answer)
    document.getElementById("myimg").setAttribute("src",data.image);
    document.getElementById("answer").innerHTML = data.answer;
  })
}
function goBack(){
  setTimeout(function(){
    document.location = localUrl }
  ,3000)
}

function hide(){
  document.getElementById("answer_question").style.display = "none";
} 

