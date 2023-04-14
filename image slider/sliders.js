
let show_images = document.querySelector(".show_image")

//Array where pictures stored
let image_s = ["korea.jpg",
"salt lake.jpg",
"utah.jpg",
"flowertemp.jpg"

];
let arrayimages=JSON.stringify(image_s);
sessionStorage.setItem("myArray",arrayimages)
let getimages=sessionStorage.getItem("myArray");
let getArray=JSON.parse(getimages)


//call the the class name where the images will show on html
let currentimage = 0;

let number= document.querySelector(".show_image")

function submit(){
let slides =document.querySelector(".slides").value;
image_s.push(slides);
console.log(slides);
localStorage.setItem("slides")
}

//variable to increment and decrement when the buttons are pressed

//function for next buttton 
function next(){
    currentimage ++;
    //access the array of pictures
   

    //controll to not excede the array of images
    if(currentimage >= image_s.length ){
        currentimage = 0;

    }
    number.src=image_s[currentimage];

}

function previous(){
    
    currentimage--
    if(currentimage < 0 ){
        currentimage = image_s.length-1;
    }
    number.src = image_s[currentimage];
}