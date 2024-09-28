const buttons = document.querySelectorAll("li");
const tabLists = document.querySelectorAll(".tab-list");
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const dataSet = e.target.id;
        tabLists.forEach((tab)=>{
            tab.classList.remove("active")
            if(tab.classList.contains(dataSet)){
                tab.classList.add("active")
            }
        })
    })
})