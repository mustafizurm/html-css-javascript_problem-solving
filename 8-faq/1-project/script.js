const buttons = document.querySelectorAll("i");
buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("active")
        const faq = btn.parentNode.parentNode;
        faq.classList.toggle("active")
        console.log(faq);
    })
})