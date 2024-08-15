// const btnContainer = document.querySelector(".category-container");
// const all_btns = btnContainer.querySelectorAll("div");
// const product_items = document.querySelectorAll(".product-item");

// product_items.forEach((p)=>{
//     p.classList.add("active")
// })

// all_btns.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//        const forMatch = e.target.getAttribute("attr");
       
//        product_items.forEach((pItem)=>{
       
//          if(forMatch == "all"){
//             pItem.classList.add("active")
//             console.log(pItem);
//          } else{
//             if(pItem.classList.contains(forMatch)){
//                 pItem.classList.add("active")  
//             } else{
//                 pItem.classList.remove("active")
//             }
//          }
        
//        })
//     })
// })



const buttons = document.querySelector(".category-container").querySelectorAll("div")
const products = document.querySelectorAll(".product-item");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const data_set = btn.innerText.toUpperCase();
        products.forEach((p)=>{
        p.classList.add("hide")
           if(data_set === "ALL"){
            p.classList.remove("hide")
             p.classList.add("active")
           } else{
            if(data_set === p.id.toUpperCase()){
                p.classList.remove("hide")
                p.classList.add("active")
            } else{
                p.classList.remove("active")
            } 
           }
        })
    })
})