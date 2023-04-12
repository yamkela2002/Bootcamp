




 function calAge(){

  let birthyear= document.getElementById("calAge").value

  let age = 2023-birthyear;

  if(!birthyear){
    alert("please enter your birthyear");
  }else if(age < 0){
   alert("age cannot be a negative");

  }else if(birthyear < 0){
    alert("birthyear cannot be less than 0");
  }
  else{
    alert(age);
  }
  }
  calAge()
 



//  function calAge(dob) { 
//     return dob = currentyear-birthyear
//  }
//  console.log(2023-2000);

//  function calAge(currentyear,birthyear){
//      let age = currentyear-birthyear
//      if( age = 2023-2000){
//         return"please enter your birth year"
//        console.log(age)
       
//      }

//  }