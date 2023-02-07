let canvas = document.querySelector("canvas");
let button = document.querySelector("button");
let canv = document.getElementById("mycanv");
button.onclick = () =>{
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);    
    let b = Math.round(Math.random()*255);    
    let s = "background-color:rgb(255,0,0)";
    let st = "background-color:rgb("+r+","+ g+","+ b+");border: 2px solid black"
    canvas.style = st;
}
