let foods = [
  {
    id: 1,
    title: "burger",
    price: "$56",
    img: "/images/download (4).jpeg",
  },
  {
    id: 2,
    title: "Hamburger.",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
  {
    id: 3,
    title: "Cheeseburger.",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
  {
    id: 4,
    title: "Sandwich.",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
  {
    id: 5,
    title: "Milkshake",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
  {
    id: 6,
    title: "Muffin",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
  {
    id: 7,
    title: "Burrito",
    price: "$87",
    img: "/images/download (4).jpeg",
  },

  {
    id: 8,
    title: "Taco",
    price: "$87",
    img: "/images/download (4).jpeg",
  },
];

foods.forEach((food) => {
  const container = document.querySelector(".food-container");

  container.innerHTML = foods.map(
    (food) => `
            <div class="item">
            <div class="images">
                <img src="${food.img}" alt="">
            </div>
            <div class="details">
                <h2 class="title">${food.title}</h2>
                <p class="price">${food.price}</p>
            </div>
            </div>

`
  );
});



let newFood = [];

const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  const serchValue = e.target.value.toUpperCase();

  newFood = foods.filter((food) => {
    return food.title.toUpperCase().includes(serchValue)
  });

  const container = document.querySelector(".food-container");

  container.innerHTML = newFood.map(
    (food) => `
            <div class="item">
            <div class="images">
                <img src="${food.img}" alt="">
            </div>
            <div class="details">
                <h2 class="title">${food.title}</h2>
                <p class="price">${food.price}</p>
            </div>
            </div>

`
  );
});
