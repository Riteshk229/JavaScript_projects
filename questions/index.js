// using selector using element

  // querySelecterAll("") will give us all the element have the same query
const questions = document.querySelectorAll('.question');

// forEach(callBack()) lets us loop through all the element of array got via querySelectorAll("")
// here it is used to get single question
questions.forEach(function(question){
    // console.log(question);

    // here the querySelector("") will get us the element inside the question we are looping
    let btn = question.querySelector('.question-btn');
    console.log(btn);

    // listening to event in the question we are looping
    btn.addEventListener('click',function(){
    // forEach(callBack()) lets us loop through all the element of array got via querySelectorAll("")
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });

});

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // parentElement gives the immediate parent of the selected element
//         // so chaining them will let us traverse the dom from bottom to top
//         // console.log(e.currentTarget.parentElement.parentElement);
//         let question = e.currentTarget.parentElement.parentElement;

//         // querySelecterAll("") will give us all the element have the same query
//         const questions = document.querySelectorAll('.question');

//         // forEach(callBack()) lets us loop through all the element of array got via querySelectorAll("")
//         questions.forEach(function(item){
//             if(question !== item){
//                 item.classList.remove('show-text');
//             }
//         });
//         question.classList.toggle('show-text');
//     });
// });
