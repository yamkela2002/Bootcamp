//call the the class name where the images will show on html
let show_images = document.querySelector(".show_image")

//Array where pictures stored
let image_s=["korea.jpg",
"salt lake.jpg",
"utah.jpg",
]

//variable to increment and decrement when the buttons are pressed
let currentimage = 0;

//function for next buttton 
function next(){
    //access the array of pictures
    show_images.src = image_s[currentimage]
    //increment the variable
    currentimage++
    //controll to not excede the array of images
    if(currentimage >= image_s.length ){
        currentimage=0
    }
}



function previous(){
    show_images.src = image_s[currentimage]

    currentimage--
    if(currentimage <0){
        currentimage=image_s.length -1
    }
}