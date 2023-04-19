
let y = [];

  if (localStorage.getItem("age")) {
  y = JSON.parse(localStorage.getItem("age"));

} else {
  y.push(age)
}

function calAge(){

  let birthyear= document.getElementById("calAge").value
  let age = 2023-birthyear;
  localStorage.setItem("age",JSON.stringify(y));

  // y.push(age);

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



  // localStorage.getItem("birthyear").value
 
// .push()
// document.querySelector("age").value='',
// localStorage.setItem("age", JSON.stringify(y));
// window.location.reload();



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