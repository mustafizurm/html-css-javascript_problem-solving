let htmlCount = 0;
const html = document.querySelector(".ht");

const htmlMachin = setInterval(()=>{
    htmlCount ++;
    html.innerHTML = htmlCount;

    if(htmlCount == 70){
        clearInterval(htmlMachin)
    }

},10)


// css
let cssCount = 0;
const css = document.querySelector(".cs");

const cssMachin = setInterval(()=>{
    cssCount ++;
    css.innerHTML = cssCount;

    if(cssCount == 75){
        clearInterval(cssMachin)
    }

},15)


// js
let jsCount = 0;
const js = document.querySelector(".j");

const jsMachin = setInterval(()=>{
    jsCount ++;
    js.innerHTML = jsCount;

    if(jsCount == 90){
        clearInterval(jsMachin)
    }

},19)

// 
// node
let nodeCount = 0;
const node = document.querySelector(".nd");

const nodeMachin = setInterval(()=>{
    nodeCount ++;
    node.innerHTML = nodeCount;

    if(nodeCount == 45){
        clearInterval(nodeMachin)
    }

},12)