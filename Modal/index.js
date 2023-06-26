// select buttons and modal
const closeBtn = document.querySelector('.close-btn');
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click',function(){
    modal.classList.add('show-modal');
});

closeBtn.addEventListener('click',function(){
    modal.classList.remove('show-modal');
});