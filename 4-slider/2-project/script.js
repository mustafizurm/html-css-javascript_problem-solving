// first

// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", ()=>{
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active")
// })

// const btns = document.querySelectorAll(".nav-btn");
// const slides = document.querySelectorAll(".img-slide");
// const contents = document.querySelectorAll(".content");

// var sliderNav = function (manuaL){
//     btns.forEach((btn)=>{
//         btn.classList.remove("active")
//     });

//     slides.forEach((slide)=>{
//         slide.classList.remove("active")
//     });

//     contents.forEach((content)=>{
//         content.classList.remove("active")
//     });

//     btns[manuaL].classList.add("active")
//     slides[manuaL].classList.add("active")
//     contents[manuaL].classList.add("active")

//     btns.forEach((btn, i)=>{
//         btn.addEventListener("click", ()=>{
//             sliderNav(i)
//         })
//     })
// }


// second

// let next = document.querySelector(".next")
// let prev = document.querySelector(".prev")

// let slider = document.querySelector(".slider");

// next.addEventListener("click", ()=>{
//     let slides = document.querySelectorAll(".slides");
//     slider.appendChild(slides[0])
//     console.log(slider);
// })

// prev.addEventListener("click", ()=>{
//     let slides = document.querySelectorAll(".slides");
//     slider.prepend(slides[slides.length - 1])
//     console.log(slider);

// })



// const slider = document.querySelector(".slider");
// const buttons = document.querySelectorAll(".buttons span");



// buttons.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         const slides = document.querySelectorAll(".slides");
//         if(btn.className === "next"){
//             slider.appendChild(slides[0])
//         } else{
//             slider.prepend(slides[slides.length-1])
//         }
//     })
// })


// third

const buttons = document.querySelectorAll(".buttons div");
const slider = document.querySelector(".slider");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

       const slide = document.querySelectorAll(".slide");

        if(btn.className === "next"){
            slider.appendChild(slide[0])
        } else{
            slider.prepend(slide[slide.length - 1])
        }
    })
})
