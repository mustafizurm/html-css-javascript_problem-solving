// // practice-1

// const opens = document.querySelector(".fa-solid");
// const ul = document.querySelector("ul");
// opens.addEventListener("click", ()=>{
//    ul.classList.toggle("active");
// })



// practice-2

// const opens = document.querySelector(".fa-bars");
// const closes = document.querySelector(".fa-x")
// const ul = document.querySelector("ul");


// opens.addEventListener("click",()=>{
//     console.log('click');
//     opens.style.display = "none";
//     closes.style.display = "block";

//     // ul.style.display = "block";
//     ul.classList.add("active")

// })

// closes.addEventListener("click", ()=>{
//     opens.style.display = "block";
//     closes.style.display = "none";

//     ul.style.display = "none";
// })




// // practice-3

// const fabars = document.querySelector(".fa-bars");
// const fax = document.querySelector(".fa-x");
// fax.classList.add("hide")

// fabars.addEventListener("click", ()=>{
//     fax.classList.remove("hide")
//     fabars.classList.add("hide")

//     // ul.classList.toggle("active");
// })

// fax.addEventListener("click", ()=>{
//     fax.classList.add("hide")
//     fabars.classList.remove("hide")

//     // ul.classList.toggle("active");
// })




// practice-4

const button = document.querySelector(".fa-bars");
const ul = document.querySelector("ul");

button.addEventListener("click", ()=>{
    ul.classList.toggle("show");
})