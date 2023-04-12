


//Array where pictures stored
let image_s = ["korea.jpg",
"salt lake.jpg",
"utah.jpg",
]


//call the the class name where the images will show on html
let currentimage = 0;
let show_images = document.querySelector(".show_image")


//variable to increment and decrement when the buttons are pressed
let number= document.querySelector("show_image")
//function for next buttton 
function next(){
    currentimage ++;
    //access the array of pictures
    show_images.src = image_s[currentimage]

    //controll to not excede the array of images
    if(currentimage >= image_s.length ){
        currentimage=0
    }
number.src=image_s[currentimage]
}



function previous(){
    show_images.src = image_s[currentimage]

    currentimage--
    if(currentimage < 0 ){
        currentimage=image_s.length -1
    }
    number.src =image_s[currentimage]
}