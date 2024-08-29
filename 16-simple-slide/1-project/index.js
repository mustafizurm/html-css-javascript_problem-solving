// const products = document.querySelectorAll(".slider .product");


// let counter = 0;
// function left(){
//     if(counter == 0){
//         counter = products.length / 3 -1
//     } else{
//         counter --
//     }

//     scroll()
// }

// function right(){
//     if(counter == products.length / 3 -1){
//         counter = 0;
//     } else{
//         counter ++
//     }

//     scroll()
// }

// function scroll (){
//     products.forEach((item)=>{
//         item.style.transform = `translateX(-${counter * 1250}px)`
//     })
// }


var photos = ["/images/headSet (1).jpeg", "/images/headSet(2).jpeg", "/images/laptop (2).jpeg"];

var imgTag = document.querySelector("img");

var count = 0;


setInterval(next, 2500)

function next(){
    count++
    if(count >= photos.length){
        count = 0
        imgTag.src = photos[count]
    } else{
        imgTag.src = photos[count]
    }
    
}


function previous(){
    count--
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count]
    } else{
        imgTag.src = photos[count]
    }
}