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

const data = [
  {
    id: 1,
    name: "headphone",
    price: 350,
    attr: "headphone",
    image: "./images/headSet (1).jpeg",
  },
  {
    id: 2,
    name: "headphone",
    price: 387,
    attr: "headphone",
    image: "./images/headSet(2).jpeg",
  },

  {
    id: 3,
    name: "laptop",
    price: 650,
    attr: "laptop",
    image: "./images/laptop(1).jpeg",
  },
  {
    id: 4,
    name: "laptop",
    price: 650,
    attr: "laptop",
    image: "./images/laptop (2).jpeg",
  },
  {
    id: 5,
    name: "phone",
    price: 650,
    attr: "phone",
    image: "./images/phone(1).jpeg",
  },
  {
    id: 6,
    name: "phone",
    price: 650,
    attr: "phone",
    image: "./images/phone (2).jpeg",
  },
  {
    id: 7,
    name: "phone",
    price: 650,
    attr: "phone",
    image: "./images/phone (3).jpeg",
  },
  {
    id: 8,
    name: "watch",
    price: 650,
    attr: "watch",
    image: "./images/watch (1).jpeg",
  },
];

const categoryContainer = document.querySelector(".category-container");
const all_btns = categoryContainer.querySelectorAll("div");

const productsContainer = document.querySelector(".products-container");

productsContainer.innerHTML = data.map(
  (d) =>
    `
    <div class="product-item headphone">
        <h4>${d.name}</h4>
        <img src="${d.image}" alt="">
        <p>$${d.price}</p>
        <button>Add To Cart</button>
   </div>
    
    `
);

all_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const forMatch = e.target.getAttribute("attr");
    productsContainer.innerHTML = "";
    data.forEach((da) => {
      if (forMatch == "all") {
        productsContainer.innerHTML += `
                    <div class="product-item headphone">
                        <h4>${da.name}</h4>
                        <img src="${da.image}" alt="">
                        <p>$${da.price}</p>
                        <button>Add To Cart</button>
                   </div>
                    
                    `;
      } else {
        if (da.attr == forMatch) {
          console.log(da);
          productsContainer.innerHTML += `
                    <div class="product-item headphone">
                        <h4>${da.name}</h4>
                        <img src="${da.image}" alt="">
                        <p>$${da.price}</p>
                        <button>Add To Cart</button>
                   </div>
                    
                    `;
        }
      }
    });
  });
});
