// select vaalue and btns
const value = document.getElementById("counter");
// const value = document.querySelector("#counter");
// const btns = document.getElementsByClassName("btn");
const btns = document.querySelectorAll(".btn");

console.log(btns);

// set initial count
let count = 0;

// for each works with querySelector but not with getElementsByClassName
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){

        // e is the event object
        // when a button is clicked e.currenTarget shows with button is clicked
        // e.currentTarget.classList gets all the classes in the currently seleted buttons
        console.log(e.currentTarget.classList);

        // storing the classes in a variable
        const styles = e.currentTarget.classList;

        // using the variable to check if the current class has these values
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        } else{
            count = 0;
            value.style.color = "black";
        }
        
        value.style.color = count > 0  ?  "green"  
        : (count < 0) ?  "red" 
        : "black";
        
        value.textContent = count;
    });
});