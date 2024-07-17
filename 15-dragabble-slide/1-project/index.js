

// real 

const warpper = document.querySelector(".wrapper");

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

const carouselChildrens = [...carousel.children];
console.log(carouselChildrens);
let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);



carouselChildrens.slice(cardPerview).reverse().forEach(card => {
    console.log(card);
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0,cardPerview).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

console.log(carousel.scrollLeft);

let isDragging = false, prevPageX, prevScrollLeft, timeoutId;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        let id = e.target.id;
        if(id === "left"){
            carousel.scrollLeft = carousel.scrollLeft + -firstCardWidth;
        } else{
            carousel.scrollLeft =  carousel.scrollLeft + firstCardWidth;
        }
    })
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging")

    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
   
}



const dragging = (e) =>{
    if(!isDragging) return;
    let positionDiff = e.pageX - prevPageX;
    console.log(prevPageX);
    console.log(e.pageX);
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging")
}

const autoPlay = () =>{
    if(window.innerWidth < 800)return;
    timeoutId = setTimeout(()=> carousel.scrollLeft += firstCardWidth, 1000);
}

autoPlay();

const infifinityScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition")
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
        carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition")
    }

    clearTimeout(timeoutId)
    if(!warpper.matches(":hover")) autoPlay();
  };


carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infifinityScroll);
warpper.addEventListener("mouseenter",()=> clearTimeout(timeoutId));
warpper.addEventListener("mouseleave", autoPlay);


























// const carousel = document.querySelector(".carousel");


//let isDragging = false, startX, startScrollLeft;

// const dragStart = (e) =>{
//     isDragging = true;
//     carousel.classList.add("dragging")

//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) =>{
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
// }

// const dragStop = () =>{
//     isDragging = false;
//     carousel.classList.remove("dragging")
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);


















// third.......


// const warpper = document.querySelector(".wrapper");

// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;





// let isDragging = false, prevPageX, prevScrollLeft, timeoutId;

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", (e)=>{
//         let id = e.target.id;
//         if(id === "left"){
//             carousel.scrollLeft = carousel.scrollLeft + -firstCardWidth;
//         } else{
//             carousel.scrollLeft =  carousel.scrollLeft + firstCardWidth;
//         }
//     })
// });

// const dragStart = (e) =>{
//     isDragging = true;
//     carousel.classList.add("dragging")

//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
   
// }



// const dragging = (e) =>{
//     if(!isDragging) return;
//     let positionDiff = e.pageX - prevPageX;
//     console.log(prevPageX);
//     console.log(e.pageX);
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () =>{
//     isDragging = false;
//     carousel.classList.remove("dragging")
// }



// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);






// const warpper = document.querySelector(".wrapper");

// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const cardWidth = carousel.querySelector(".card").offsetWidth;





// let isDragging = false, startX, startScrollLeft;



// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", (e)=>{
//         let id = e.target.id;
//         if(id === "left"){
//             carousel.scrollLeft = carousel.scrollLeft + -cardWidth;
//         } else{
//             carousel.scrollLeft =  carousel.scrollLeft + cardWidth;
//         }
//     })
// });


// let dragStart = (e) =>{
//     isDragging = true;
//     carousel.classList.add("dragging")

//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }


// let dragging = (e) =>{
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// let dragStop = () =>{
//     isDragging = false;

//     carousel.classList.remove("dragging")
// }

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mouseup", dragStop);





