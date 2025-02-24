const header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
    // header.classList.toggle("sticky", window.scrollY > 0)
    if(window.scrollY > 0){
        header.classList.add("sticky")
    } else{
        header.classList.remove("sticky")
    }
})