let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let btn = document.querySelector("button");
btn.onclick = () =>{
    canvas.height *= 0.9;
    canvas.width *= 0.9;
    context.beginPath();
    context.arc(100,50,20,0,2*Math.PI);
    context.stroke();
}

context.beginPath();
context.arc(100,50,20,0,2*Math.PI);
context.stroke();