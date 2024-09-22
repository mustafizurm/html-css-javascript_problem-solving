// // real

// const warpper = document.querySelector(".wrapper");

// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// const carouselChildrens = [...carousel.children];

// let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

// // carouselChildrens.slice(cardPerview).reverse().forEach(card => {
// //     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// // });

// // carouselChildrens.slice(0, cardPerview).forEach((card) => {
// //   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// // });

// carouselChildrens.slice(3).reverse().forEach(card => {
//   carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// carouselChildrens.slice(0, 3).forEach((card) => {
// carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// let isDragging = false,
//     prevPageX,
//     prevScrollLeft,
//     timeoutId;

// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let id = e.target.id;
//     if (id === "left") {
//       carousel.scrollLeft = carousel.scrollLeft  - firstCardWidth;
//     } else {
//       carousel.scrollLeft = carousel.scrollLeft + firstCardWidth;
//       console.log(carousel.scrollLeft);
//     }
//   });

// });

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");

//   prevPageX = e.pageX;
//   prevScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return;
//   let positionDiff = e.pageX - prevPageX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// console.log(window.innerWidth);

// const autoPlay = () => {
//     if (window.innerWidth < 800) return;
//     timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth),1000);
// };

// autoPlay();

// const infifinityScroll = () => {
//   if (carousel.scrollLeft === 0) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
//     console.log(carousel.scrollLeft);

//     carousel.classList.remove("no-transition");
//   } else if (
//     Math.ceil(carousel.scrollLeft) ===
//     carousel.scrollWidth - carousel.offsetWidth
//   ) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.offsetWidth + 1200;
//     console.log(carousel.scrollLeft);
//     carousel.classList.remove("no-transition");
//   }

//   clearTimeout(timeoutId);
//   if (!warpper.matches(":hover")) autoPlay();
// };



// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infifinityScroll);
// warpper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// warpper.addEventListener("mouseleave", autoPlay);















// // fiz 

// const wrapper = document.querySelector(".wrapper");
// const slides = document.querySelectorAll(".slide");
// const slideWidth = document.querySelector(".slide").offsetWidth;
// const buttons = document.querySelectorAll("button")


// let startX = '';
// let isDragging = false;
// let prevscrollLeft = 0;

// let counter = 0;


// let slideParents = [...wrapper.children];

// slideParents.slice(0,4).forEach((slide)=>{
//     wrapper.insertAdjacentHTML("afterbegin", slide.outerHTML);
// })


// buttons.forEach((btn)=>{
//     btn.addEventListener('click', ()=>{
//         if(btn.id === "next"){
//             counter ++
//             // if(counter >= 5){
//             //     wrapper.classList.add("no-transition");
//             //     counter = 1;
//             //     wrapper.scrollLeft = slideWidth * counter;
//             //     wrapper.classList.remove("no-transition");
//             // }
//             wrapper.scrollLeft = slideWidth * counter;
//         } else{
//            counter --
//            wrapper.scrollLeft = slideWidth * counter;

//            if(counter < 0){
//              counter = 4;
//              wrapper.classList.add("no-transition")
//              wrapper.scrollLeft = slideWidth * counter;
//              wrapper.classList.remove("no-transition")
//            }
//         }
//     })

//     btn.addEventListener("mouseenter", ()=>{
//         clearInterval(stop)
//     })

//     btn.addEventListener("mouseleave", ()=>{
//        autoPlay()
//     })
// })


// // wrapper.addEventListener("transitionend", ()=>{

// //     if(counter > 3){
// //         wrapper.style.transition = "none";
// //         wrapper.classList.add("no-transition");
// //         index = 0;
// //         wrapper.scrollLeft = slideWidth * counter;
        
// //     }
// // })




// // all function
// const dragstart = (e) =>{
//     isDragging = true;
//     wrapper.classList.add("dragging")
//     startX = e.pageX;

//     prevscrollLeft = wrapper.scrollLeft;
//     console.log(wrapper.scrollLeft);
// }

// const dragMove = (e) =>{
//     if(isDragging){
//         let posDiffer = e.pageX - startX;
//         wrapper.scrollLeft = prevscrollLeft - posDiffer;
//     }

// }




// const infifinityScroll = () => {
//     // if (
//     //     Math.ceil(wrapper.scrollLeft) ===
//     //     wrapper.scrollWidth - wrapper.offsetWidth
//     //   ) {
//     //     wrapper.classList.add("no-transition");
//     //     // carousel.scrollLeft = carousel.offsetWidth + 1200;
//     //     counter = 0
//     //     wrapper.scrollLeft = slideWidth * counter;
//     //     wrapper.classList.remove("no-transition");
//     //   }

//     // if(Math.ceil(wrapper.scrollLeft) === wrapper.scrollWidth - wrapper.offsetWidth){
//     //     counter = 0;
//     //     wrapper.classList.add("no-transition")
//     //     wrapper.scrollLeft = slideWidth * counter;
//     //     wrapper.classList.remove("no-transition")

//     // }

//     if(wrapper.scrollLeft === 0){

//     }

// }


// let stop = "";

// const dragEnd = () =>{
//     wrapper.classList.remove("dragging")
//    isDragging = false;
// }

// const autoPlay = () =>{
//      stop = setInterval(()=>{
//         counter++
//         wrapper.scrollLeft = slideWidth * counter;
//     }, 1000)
    
// }

// // autoPlay()




// wrapper.addEventListener("mousedown", dragstart)
// wrapper.addEventListener("mouseover", dragMove)
// wrapper.addEventListener("mouseup", dragEnd)
// wrapper.addEventListener("scroll", infifinityScroll)
// wrapper.addEventListener("mouseenter", ()=>{
//     clearInterval(stop)
// })


// wrapper.addEventListener("mouseleave", ()=>{
//     autoPlay()
// })










const wrapper = document.querySelector(".wrapper")
const carousel = document.querySelector(".carousel")
const slideWidth = document.querySelector(".card").offsetWidth;
const right = document.querySelector("#right");
const left = document.querySelector("#left");




let mouseMoveStart = false;
let prevX = 0;
let prevScrolLeft = 0;


wrapper.addEventListener("mousemove", (e)=>{
  if(mouseMoveStart){
    let differ = e.pageX - prevX;
    carousel.scrollLeft = prevScrolLeft - differ
  }
})

wrapper.addEventListener("mousedown", (e)=>{
  mouseMoveStart = true;
  prevX = e.pageX
  prevScrolLeft = carousel.scrollLeft;

})

wrapper.addEventListener("mouseup", ()=>{
  mouseMoveStart = false;
})


