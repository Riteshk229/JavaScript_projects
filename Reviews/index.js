// local review data
const reviews = [
    {
        id:1,
        name: "Ritesh",
        job: "Web Developer",
        img: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id:2,
        name: "Jyoti Kumari",
        job: "Fashion Designer",
        img: "https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },{
        id:3,
        name: "Suraj Sharma",
        job: " Desiel Mechanic",
        img: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    },{
        id:4,
        name: "Manoj Sharma",
        job: "Bussinessman",
        img: "https://i.guim.co.uk/img/media/bc12099e16c5e0a7ed7b1e63687dac6dd71ff13b/305_331_2800_1680/master/2800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3d0d6772b03019da00428fe5537404b5",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// buttons
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    // console.log("content");
    showPerson();
});


// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    // console.log(item);
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// show next person
next.addEventListener('click',function(){
    currentItem =  currentItem++ < reviews.length - 1 ? currentItem : 0;
    showPerson();
});

// show prev person
prev.addEventListener("click",function(){
    currentItem = currentItem-- > 0 ? currentItem : reviews.length-1;
    showPerson();
});

// show random person
random.addEventListener("click",function(){
    currentItem = getRandomPerson();
    console.log(currentItem);
    showPerson();
});

// get random person
function getRandomPerson(){
    return Math.floor(Math.random()*reviews.length);
}