console.log('sup');

var imageCount = 1;
var total = 4;


window.setInterval(function photoA() {
  var body = document.getElementById('body');
  imageCount = imageCount + 1;
  if(imageCount > total){imageCount = 1;}
  body.style= "background: url('Food"+ imageCount +".jpg') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover -o-background-size: cover; background-size: cover; animation: 2s ease-in-out"
}, 5000)
// )

