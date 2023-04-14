

function ConvertCtoF(){

let C=(document.getElementById("Fahrenheits").value)

   let f=(C*9/5+32)

    if(f<16){
        alert(f + "" + "it is cold,wear a jacket");
    }   
    else if (f<=16 && f<=21){
       alert(f + "" + "if is warm,wear a t-shirt and jeans");
    }
    else if (f>21){

   alert (f + "" + "it is hot,wear shorts");
     }
    }

//  ConvertCtoF(15)

    



