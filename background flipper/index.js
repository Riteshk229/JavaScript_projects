const colors = ["Green","red","aqua","yellow","purple","rgb(125,125,125)","#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById("clr");

btn.addEventListener("click",function(e){
    // console.log(document.body);

    // get random number between 0-4
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];

    // text content to acces the value inside color span
    console.log(color.textContent)

    // color[0] is getting the color from the array
    // colors[randomNumber].charAt(0).toUpperCase() is getting the first character and  cpitalizing it
    // colors[randomNumber].slice(1) is adding the rest to the capitalized letter
    color.textContent = colors[randomNumber].charAt(0).toUpperCase() + colors[randomNumber].slice(1);
});

// generate random numbers between 0 - 1
function getRandomNumber(){
    // Math.floor rounds the number to lesser interger
    // Math.ceil rounds the number to greater interger
    // Math.round rounds the number to nearest interger
    return Math.floor(Math.random()*colors.length);
}