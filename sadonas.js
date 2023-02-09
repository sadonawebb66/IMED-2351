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

//module 4 work below
const catName ="Abby";
const animal ="cat";
document.getElementById("cat-description").innerHTML =      //concatenated variable
`I have a ${animal} and her name is ${catName} and I love her so much.`;
let marrital ="married";
if (marrital = "married"){
  console.log(`Way to go! You're not single!`);     //conditional statement
} else if (marrital ="dating"){
  console.log(`You're not lame, I'm happy for you.`);
}else{
  console.log(`You're lame, go touch some grass and maybe you'll find someone.`);
}
let fruits = "Apple";
switch(fruits) {
  case "Banana":
    alert("Hello")
    break;                    //switch statement
  case "Apple":
    alert("Welcome")
    break;
  
default:

    alert("Neither");
}
document.getElementById("fruits").innerHTML = "alert";      //string method
function myFunction() {
  let text = document.getElementById("animal-switch").innerHTML;
  document.getElementById("animal-switch").innerHTML =
  text.replace("dog Jax","cat Abby");}

  let p = 9.656;
  document.getElementById("number-method").innerHTML = 
    p.toPrecision() + "<br>" +
    p.toPrecision(16) + "<br>" +                    //number method
    p.toPrecision(4) + "<br>" +
    p.toPrecision(8);  