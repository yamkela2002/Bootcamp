

//Array where pictures stored
let images;
if (localStorage.getItem("images_s")) {
  images = JSON.parse(localStorage.getItem("images_s"));
} else {
  images = ["korea.jpg", "salt lake.jpg", "utah.jpg", "flowertemp.jpg"];
}

// let arrayimages=JSON.stringify(images);
// sessionStorage.setItem("myArray",arrayimages)
// let getimages=sessionStorage.getItem("myArray");
// let getArray=JSON.parse(getimages)
console.log(images)
//call the the class name where the images will show on html
let currentimage = 0;

let number = document.querySelector(".show_image");
number.src = images[currentimage]

function submit() {
  let slides = document.querySelector(".slides").value;
  console.log("Hello World")
  console.log(slides);
  images.push(slides);
  
  localStorage.setItem("images_s", JSON.stringify(images));
}

//variable to increment and decrement when the buttons are pressed

//function for next buttton
function next() {
  currentimage++;
  //access the array of pictures

  //controll to not excede the array of images
  
  if (currentimage >= images.length) {
    currentimage = 0;
  }
  number.src = images[currentimage];
}

function previous() {
  currentimage--;
  if (currentimage < 0) {
    currentimage = images.length - 1;
  }
  number.src = images[currentimage];
}
