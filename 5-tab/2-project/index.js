const data = [
    {
        id: 1,
        title: "Tab heading one",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sunt doloremque dolore blanditiis dolor itaque, voluptatem cupiditate culpa. Dolor perspiciatis tenetur, quam autem cupiditate distinctio obcaecati perferendis qui eaque veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia ut totam nesciunt voluptatibus, aspernatur quidem doloremque libero deleniti? Mollitia magnam vero inventore. Cupiditate obcaecati necessitatibus voluptates minus molestiae libero."
    },
    {
        id: 2,
        title: "Tab heading two",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sunt doloremque dolore blanditiis dolor itaque, voluptatem cupiditate culpa. Dolor perspiciatis tenetur, quam autem cupiditate distinctio obcaecati perferendis qui eaque veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia ut totam nesciunt voluptatibus, aspernatur quidem doloremque libero deleniti? Mollitia magnam vero inventore. Cupiditate obcaecati necessitatibus voluptates minus molestiae libero."
    },
    {
        id: 3,
        title: "Tab heading there",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sunt doloremque dolore blanditiis dolor itaque, voluptatem cupiditate culpa. Dolor perspiciatis tenetur, quam autem cupiditate distinctio obcaecati perferendis qui eaque veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia ut totam nesciunt voluptatibus, aspernatur quidem doloremque libero deleniti? Mollitia magnam vero inventore. Cupiditate obcaecati necessitatibus voluptates minus molestiae libero."
    },
    {
        id: 4,
        title: "Tab heading four",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sunt doloremque dolore blanditiis dolor itaque, voluptatem cupiditate culpa. Dolor perspiciatis tenetur, quam autem cupiditate distinctio obcaecati perferendis qui eaque veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia ut totam nesciunt voluptatibus, aspernatur quidem doloremque libero deleniti? Mollitia magnam vero inventore. Cupiditate obcaecati necessitatibus voluptates minus molestiae libero."
    },
]

const tabDiscription = document.querySelector(".tab-discription");

const buttons = document.querySelectorAll("li");

tabDiscription.innerHTML = `
                <div class="item">
                    <h2>${data[0].title}</h2>
                    <p>${data[0].description}</p>
                </div>

`

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const btnAttr = e.target.getAttribute("attr");
        
        const mainData = data[btnAttr];

        tabDiscription.innerHTML = `
                <div class="item">
                    <h2>${mainData.title}</h2>
                    <p>${mainData.description}</p>
                </div>
        
        `


    })
})