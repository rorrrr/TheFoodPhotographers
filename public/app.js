console.log('application ran');

// var imageCount = 1;
// var total = 4;

// window.setInterval(function photoA() {
//   var body = document.getElementById('body');
//   imageCount = imageCount + 1;
//   if(imageCount > total){imageCount = 1;}
//   body.style= "background: url('Food"+ imageCount +".jpg') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover -o-background-size: cover; background-size: cover; -webkit-transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -o-transition: opacity 1s ease-in-out transition: opacity 1s ease-in-out;"
// }, 8000)
// // )

window.onload = function () { document.body.className = ""; }

var images = [
{image: 'Food2.jpg'},
{image: 'Food1.jpg'},
{image: 'Food3.jpg'},
{image: 'Food4.jpg'}
];

bgImageGallery(images, 'body', 8000, false);


var landing = document.getElementById("central");
var coverageContent = document.getElementById("coverageContent");
var clients = document.getElementById("clients");
var contact = document.getElementById("contact");

function coverageShow(){
  landing.style.display = "none";
  coverageContent.style.display = "block";
  contactContent.style.display = "none";
  clientsContent.style.display = "none";
  console.log('coverageclick');
}

function clientsShow()
{
  landing.style.display = "none";
  coverageContent.style.display = "none";
  contactContent.style.display = "none";
  clientsContent.style.display = "block";
  console.log('coverageclick');
}

function contactShow()
{
  landing.style.display = "none";
  coverageContent.style.display = "none";
  contactContent.style.display = "block";
  clientsContent.style.display = "none";
  console.log('coverageclick');
}


