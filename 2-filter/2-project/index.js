// const buttons = document.querySelectorAll("button");
// const products = document.querySelectorAll(".product")
// const products_container = document.querySelector(".products-container");

// buttons.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         const data_set = btn.innerText.toUpperCase();
//         products.forEach((product)=>{
//             product.classList.add("hide")
//             if(data_set === "ALL"){
//                 product.classList.remove("hide")
//                 product.classList.add("active")
//             } else{
//                 if(product.id.toUpperCase() === data_set){
//                     product.classList.remove("hide")
//                     product.classList.add("active")
//                   } else{
//                     product.classList.remove("active")
//                   }
//             }
//         })
//     })
// })

const buttons = document.querySelectorAll("button");
const products = document.querySelectorAll(".product")

buttons.forEach((btn)=>{

    btn.addEventListener("click", ()=>{
        const data_set = btn.innerText.toUpperCase();

        products.forEach((p)=>{
            const id = p.id.toUpperCase();
            p.classList.add("hide")
            if(data_set === "ALL"){
                p.classList.add("active")
                p.classList.remove("hide")
            } else{
                if(data_set === id){
                    p.classList.add("active")
                    p.classList.remove("hide")
                } else{
                    p.classList.remove("active")
                }
            }
        })
    })
})
