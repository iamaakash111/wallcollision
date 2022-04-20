const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

// fillRect()
ctx.fillStyle = "orange";
ctx.fillRect(10,10, 100,50)

ctx.fillStyle = "blue";
ctx.fillRect(120,10, 100,50)

//strokeREct
ctx.lineWidth = 8;
ctx.strokeStyle = "red";
ctx.fillStyle= "green";
ctx.strokeRect(250,18,100,40);

// Clear Canvas
//ctx.clearRect(0,0,canvas.width,canvas.height)

//FillText

ctx.fillStyle ="white";
ctx.font = "20px verdana";
ctx.fillText("What's Up?", 400,20)

//StrokeText()
ctx.lineWidth=1
ctx.strokeText("What's Up?", 550,25)

ctx.arc(400,200,60,0,Math.PI*2,true);
ctx.stroke();

//Paths
ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(20,100);
ctx.lineTo(100,100);
ctx.lineTo(60,180)
ctx.closePath();
ctx.fillStyle = "cyan";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(130,100)
ctx.lineTo(200,100);
ctx.lineTo(200,200);
ctx.lineTo(130,200);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(250,100,100,50);
ctx.fill();
ctx.arc(280,100,50,0,Math.PI*2);
ctx.stroke();

ctx.arc(300,200,60,0,Math.PI*0.2,true);
ctx.stroke();








