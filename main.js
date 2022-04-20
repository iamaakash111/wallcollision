const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

const circle = {
    x:200,
    y:200,
    size:20,
    dx:Math.random()*10+1,
    dy:Math.random()*4+1
}

function drawCircle(){
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(circle.x,circle.y,circle.size,0, Math.PI*2);
    ctx.fill();

}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCircle();
    circle.x+=circle.dx;
    circle.y+=circle.dy;

    if (circle.size+circle.x>canvas.width ||
        circle.x-circle.size<0){
         circle.dx*=-1;
    }

    if (circle.size+circle.y>canvas.height ||
        circle.y-circle.size<0){
         circle.dy*=-1;
    }

    requestAnimationFrame(update)

}
update();

