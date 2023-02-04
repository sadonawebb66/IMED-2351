console.log('Would you consider yourself more of a DC fan or a Marvel fan?');
document.write(9+10);
var scope ="global"; //global variable
console.log('marvel for me');  //output to console

let a = 4;
let x = (14+29) * a;            //arithmetic/ mathematical operations
document.getElementById("arithmetic").innerHTML = x;

var carName1="Buggy"; //string variable

//module 3 work below
function displayDate() {
  document.getElementById("central-time-date").innerHTML = Date();
}
const dog={
    breed:"heeler", color:"red", size:"large" , name:'Jax'  
};
dog.color="blue";
document.getElementById("doggy-description").innerHTML =
dog.name + " is a " + dog.color +" " + dog.breed;
let text = "I am not funny";
let part = text.slice(9, 14);

document.getElementById("slice-example").innerHTML = part;