const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.getElementById("clr");

btn.addEventListener('click',function(e){
    // console.log(document.body);

    let hexColor = "#";
    for(let i = 0; i < 6;i++){
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;

    // text content to acces the value inside color span
    console.log(color.textContent)

    color.textContent = hexColor;

});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}