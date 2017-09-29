console.log('sup');

// var imageCount = 1;
// var total = 4;

// window.setInterval(function photoA() {
//   var body = document.getElementById('body');
//   imageCount = imageCount + 1;
//   if(imageCount > total){imageCount = 1;}
//   body.style= "background: url('Food"+ imageCount +".jpg') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover -o-background-size: cover; background-size: cover; -webkit-transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -o-transition: opacity 1s ease-in-out transition: opacity 1s ease-in-out;"
// }, 8000)
// // )

var images = [
  {image: 'Food1.jpg'},
  {image: 'Food2.jpg'},
  {image: 'Food3.jpg'},
  {image: 'Food3.jpg'}
];
 
bgImageGallery(images, 'body', 8000, false);
