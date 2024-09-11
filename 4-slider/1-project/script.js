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

// carouselChildrens.slice(0, cardPerview).forEach((card) => {
//   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// let isDragging = false,
//   prevPageX,
//   prevScrollLeft,
//   timeoutId;

// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let id = e.target.id;
//     if (id === "left") {
//       carousel.scrollLeft = carousel.scrollLeft + -firstCardWidth;
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

// const autoPlay = () => {
//   if (window.innerWidth < 800) return;
//   timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1000);
// };

// autoPlay();

// const infifinityScroll = () => {
//   if (carousel.scrollLeft === 0) {
//     carousel.classList.add("no-transition");
//     carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;

//     carousel.classList.remove("no-transition");
//   } else if (
//     Math.ceil(carousel.scrollLeft) ===
//     carousel.scrollWidth - carousel.offsetWidth
//   ) {
//     carousel.classList.add("no-transition");
//     // console.log(carousel.offsetWidth);
//     carousel.scrollLeft = 0;
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





// // fake

// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// let startX = "";
// let mousedownClicked = false;
// let previousScrollLeft = "";
// let counter = 0;

// arrowBtns.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         if(btn.id === "right"){
//             counter ++;
//             carousel.scrollLeft = firstCardWidth * counter;
//             if(counter > 4){
//                 counter = 0;
//                 carousel.scrollLeft = firstCardWidth * counter;
//             }
//         } else{
//             counter --
//             if(counter < 0){
//                 counter = 0
//                 carousel.scrollLeft = firstCardWidth * counter;
//             }
//         }
//     })
// })




// carousel.addEventListener("mousedown", (e)=>{
//     mousedownClicked = true
//     startX = e.pageX;
//     carousel.classList.add("dragging")
//     previousScrollLeft = carousel.scrollLeft
// })

// carousel.addEventListener("mousemove", (e)=>{
//     if(mousedownClicked){
//         let totalMouseMove = e.pageX - startX;

//         carousel.scrollLeft = previousScrollLeft - totalMouseMove;
//     }
// })

// carousel.addEventListener("mouseup", ()=>{
//     carousel.classList.remove("dragging")
//     mousedownClicked = false;
// })


