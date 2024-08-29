const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryItems= document.querySelectorAll(".gallery-item");
const galleryControls = ["previous", "next"];


// class Carousel {
//     constructor(container, items, controls){
//         this.carouselContainer = container;
//         this.carouselControls = controls;
//         this.carouelArray = [...items]
//     }

//     updateGallery(){
//         this.carouelArray.forEach((el)=>{
//             el.classList.remove("gallery-item-1")
//             el.classList.remove("gallery-item-2")
//             el.classList.remove("gallery-item-3")
//             el.classList.remove("gallery-item-4")
//             el.classList.remove("gallery-item-5")
//         })

//         this.carouelArray.slice(0, 5).forEach((el, i)=>{
//             el.classList.add(`gallery-item-${i+1}`)
//         })
//     }

//     setCurrentState(direction) {
//         if(direction.className == "gallery-controls-previous"){
//             this.carouelArray.unshift(this.carouelArray.pop())
//         } else{
//             this.carouelArray.push(this.carouelArray.shift());
//         }

//         this.updateGallery();
//     }

//     setControls (){
//         this.carouselControls.forEach((control)=>{
//             const btn = document.createElement("button")
//             btn.className = `gallery-controls-${control}`
//             // galleryControlsContainer.appendChild(document.createElement("button")).className = `gallery-controls-${control}`;
//             galleryControlsContainer.appendChild(btn);
//             document.querySelector(`.gallery-controls-${control}`).innerText = control;
//         })
//     }

//     useControls(){
//         const triggers = [...galleryControlsContainer.children];
//         triggers.forEach((control)=>{
//             control.addEventListener("click", (e)=>{
//                 // e.preventDefault();
//                 this.setCurrentState(control)
//                 console.log(control);
//             })
//         })
//     }
// }


// const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();





class slider {
    constructor(){

    }

    secondSetControls(){

        // galleryControls.forEach((control)=>{
        //     const btn = document.createElement("button");
        //     btn.className = `gallery-controls-${control}`;
        //     galleryControlsContainer.appendChild(btn)

        //     document.querySelector(`.gallery-controls-${control}`).innerText = control;
        // })


        galleryControlsContainer.innerHTML = galleryControls.map((control)=>(
            `
            
            <button className="gallery-control-${control}">${control}</button>
            
            `
        ))

        galleryControls.forEach((control)=>{
            const btn =  document.querySelector(`.gallery-controls-${control}`);
            console.log();
        })


       
    }

    secondUseControls(){

    }
}

const exampleCarousel = new slider();
exampleCarousel.secondSetControls();