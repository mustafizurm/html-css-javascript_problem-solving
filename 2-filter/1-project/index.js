// number -1 practice

// const buttons = document.querySelector(".tabs-container").querySelectorAll("button");
// const cards = document.querySelectorAll(".card");

// buttons.forEach((btn)=>{
//   btn.addEventListener("click",(e)=>{

//      let buttonValue = e.target.dataset.name;

//      document.querySelector(".active").classList.remove("active");
//      e.target.classList.add('active')

//      cards.forEach((card)=>{

//          let cardValue = card.dataset.name;

//          if(buttonValue === "all"){
//              card.classList.remove('hide')
//          } else{
//            if(buttonValue === cardValue){
//                card.classList.remove('hide')
//            } else{
//               card.classList.add('hide')
//            }
//          }

//      })
//   })
// })

// number-2 practice

// const cards = document.querySelectorAll(".card");
// const buttons = document.querySelectorAll("button");
// buttons.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         const currectBtn = e.target.dataset.name;

//         cards.forEach((card)=>{
//           const allCard = card;
//           const perticulerCard = card.dataset.name;

//           allCard.classList.add("hide")

//           if(currectBtn == perticulerCard){
//                allCard.classList.remove("hide")
//           }

//         })

//     })
// })

// number-3 practice

// if(buttonValue === "all"){
//   card.style.display = "block"
// } else{
//   if(buttonValue === cardValue){
//     card.style.display = "block"
//   } else{
//     card.style.display = "none"
//   }
// }

// buttons.forEach((btn)=>{

//     btn.addEventListener("click", (e)=>{
//         cards.forEach((card)=>{
//           if(e.target.dataset.name === card.dataset.name || e.target.dataset.name  === "all"){
//             card.classList.remove('hide')
//           }  else{
//                card.classList.add('hide')
//           }

//         })
//     })
// })

// number-4 practice

// const buttons = document.querySelector(".tabs-container").querySelectorAll("button");

// buttons.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//       const currentBtn = e.target.dataset.name;

//       // step second
//         const cards = document.querySelectorAll(".card");
//     cards.forEach((card)=>{
//     const allCard = card;
//     const perticulerCard = card.dataset.name;

//        allCard.classList.add('hide')

//        if(currentBtn == "all"){
//             allCard.classList.remove('hide')
//        } else{

//         if(currentBtn == perticulerCard){
//           allCard.classList.remove('hide')
//         }

//        }

//     })

//     })
// })

// number -5 practice

// const buttons = document.querySelector(".tabs-container").querySelectorAll("button");

//     buttons.forEach((btn)=>{
//       btn.addEventListener("click", (e)=>{
//           const currentBtn = e.target.dataset.name;

//           // second step

//           const cards = document.querySelectorAll(".card");
//     cards.forEach((card)=>{
//        const allCard = card;
//        const perticulerCard = allCard.dataset.name;

//       //  third step
//         allCard.classList.add('hide')

//          if(currentBtn == "all"){
//            allCard.classList.remove('hide')
//          } else{
//           if(currentBtn == perticulerCard){
//             allCard.classList.remove('hide')
//           }
//          }

//     })
//       })
//     })

//     //

//     const tabButtons = document.querySelector('.tabs-container').querySelectorAll("button");

//     tabButtons.forEach((tabBtn)=>{
//        tabBtn.addEventListener("click", (e)=>{

//         const currentBtn = e.target.dataset.name;

//         const allTabBtn = tabBtn;
//         const perticulerTabBtn = tabBtn.dataset.name;

//         const active = document.querySelector(".active");
//           active.classList.remove('active')

//         if(currentBtn == perticulerTabBtn){
//           allTabBtn.classList.add("active")
//         }
//        })

//     })

// number 6 - practice

// const buttons = document.querySelector('.tabs-container').querySelectorAll("button");
//  buttons.forEach((btn)=>{
//   btn.addEventListener("click", (e)=>{
//      const currectBtn = e.target.dataset.name;

//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card)=>{
//       const allCard = card;
//       const perticulerCard = allCard.dataset.name;

//         allCard.classList.add('hide')

//       if(currectBtn == "all"){
//         allCard.classList.remove('hide')
//       } else{
//         if(currectBtn == perticulerCard){
//           allCard.classList.remove('hide')
//         }
//       }

//     })

//   })
//  })

// const showAllBtn = document.querySelector("#showAll");
// const laptopBtn = document.querySelector("#laptop");
// const headphoneBtn = document.querySelector("#headphone");
// const mobileBtn = document.querySelector("#mobile");
// const watchBtn = document.querySelector("#watch");

// showAllBtn.addEventListener("click", (e)=>{
//     console.log(e.target)
// })

// laptopBtn.addEventListener("click", (e)=>{
//   console.log(e.target)
// })

// headphoneBtn.addEventListener("click", (e)=>{
//   console.log(e.target)
// })

// mobileBtn.addEventListener("click", (e)=>{
//   console.log(e.target)
// })

// watchBtn.addEventListener("click", (e)=>{
//   console.log(e.target)
// })

// const buttons = document.querySelector(".tabs-container").querySelectorAll("button");

// buttons.forEach((btn)=>{
//   btn.addEventListener("click", (e)=>{
//      const currentBtn = e.target.dataset.name;

//      const allbtn = btn;
//      const perticulerBtn = btn.dataset.name;

//        const active = document.querySelector('.active').classList.remove('active');

//      if(currentBtn == perticulerBtn){
//         allbtn.classList.add('active')
//      }
//   })
// })


// const cards = [
//   {
//     name: "HeadPhone",
//     id: "headphone",
//   },
//   {
//     name: "HeadPhone",
//     id: "headphone",
//   },

//   {
//     name: "Laptop",
//     id: "laptop",
//   },

//   {
//     name: "Laptop",
//     id: "laptop",
//   },

//   {
//     name: "Mobile",
//     id: "mobile",
//   },
//   {
//     name: "Mobile",
//     id: "mobile",
//   },
//   {
//     name: "Mobile",
//     id: "mobile",
//   },

//   {
//     name: "Watch",
//     id: "watch",
//   },
// ];

// cards.forEach((card)=>{
//    const allCard = card;
//    const perticulerCard = card.id;

// })

//  1- button select kora, button ka identify kore.
//  2- jader satha mass korbo, tader ka ana, and identify kora.

//




// number-7

let products = [
    {
      id: 1,
      common: 'all',
      title: "headphone",
      country: "bangladesh",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 2,
      common: 'all',
      title: "headphone",
      country: "pakistan",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 3,
      common: 'all',
      title: "headphone",
      country: "india",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 4,
      common: 'all',
      title: "mobile",
      country: "bangladesh",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 5,
      common: 'all',
      title: "mobile",
      country: "india",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 1,
      common: 'all',
      title: "laptop",
      country: "bangladesh",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 7,
      common: 'all',
      title: "laptop",
      country: "india",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
    {
      id: 8,
      common: 'all',
      title: "computer",
      country: "bangladesh",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta blanditiis molestiae obcaecati ipsam a commodi, dolorum tempora culpa placeat enim maxime, ad nulla quisquam rem voluptate corporis, nostrum facere?",
    },
  ];

  let newProducts = [];
  


  const allButtons = document.querySelectorAll("li");
  allButtons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let identity = e.target.dataset.name;
      newProducts = products.filter((p) => identity == p.title  || identity == p.common);
      
  const container = document.querySelector(".container");

  container.innerHTML = newProducts.map((newProduct)=>
    `
    
    <div class="item">
        <h2>${newProduct.title}</h2>
        <h5>${newProduct.country}</h5>
        <p>${newProduct.desc}</p>
   </div>

    `
  ) 
  
    })
  })


  const container = document.querySelector(".container");

  container.innerHTML = products.map((produ)=>
    `
    
    <div class="item">
        <h2>${produ.title}</h2>
        <h5>${produ.country}</h5>
        <p>${produ.desc}</p>
   </div>

    `
  ) 
  
  
  