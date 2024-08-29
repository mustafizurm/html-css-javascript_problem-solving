const buttons = document
  .querySelector(".product-container")
  .querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentBtn = e.target.dataset.name;

    if (currentBtn == "getItem") {
      const buttonParent = btn.parentNode;
      const productItem = buttonParent.parentNode;
      getItem(productItem);
    }
  });
});

const getItem = (product) => {

    const name = product.querySelector('h4').innerHTML;
    const price = product.querySelector("span").innerHTML;


  const calculateContainer = document.querySelector(".first");
  calculateContainer.innerHTML += `

   <div class="calculate-item">
        <h4>${name}</h4>
        <h4>Price:${price}</h4>
        <i class="fa-solid fa-trash"></i>
    </div>
    `;

    
};
