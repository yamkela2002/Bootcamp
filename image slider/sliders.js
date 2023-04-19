

// Array where pictures stored
let images;
if (localStorage.getItem("images_s")) {
  images = JSON.parse(localStorage.getItem("images_s"));
} else {
  images = ["korea.jpg", "salt lake.jpg", "utah.jpg", "flowertemp.jpg"];
}

// if (localStorage.getItem("image_s")){
    // alert(" the picture already exists"

//call the the class name where the images will show on html

let i = 0;

let number = document.querySelector(".show_image");
number.src = images[i]

function submit() {
  let slides = document.querySelector(".slides").value;
  // console.log("Hello World")
  // console.log(slides);
  // images.push(slides);
  
  localStorage.setItem("images_s", JSON.stringify(images));


// let image_s=document.querySelector(".image_s");
if(slides== ""||images==null){
    return alert("the button cannot be empty")

}
for (let i = 0; i < images.length; i++)

if(slides==images[i]){
  return alert("this image already exists")
}
images.push(slides)
  document.querySelector(".image_s").value='',
localStorage.setItem("image_s", JSON.stringify(images));
window.location.reload();
}

function removeImages(){
  images.splice(i,1)
  localStorage.setItem("image_s", JSON.stringify(images));
  window.location.reload();
}

function next() {
  i++;

   if (i >= images.length) {
    currentimage = 0;
  }
   number.src = images[i];
 }


function previous() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  number.src = images[i];
}

