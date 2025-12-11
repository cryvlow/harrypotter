// Partículas doradas
const canvas=document.getElementById('particle-canvas');const ctx=canvas.getContext('2d');
let particles=[];const numParticles=100;
function initParticles(){canvas.width=innerWidth;canvas.height=innerHeight;particles=[];for(let i=0;i<numParticles;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*2+1,speedY:Math.random()*0.5+0.2,opacity:Math.random()*0.5+0.2});}}
function drawParticles(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.fillStyle=`rgba(212,184,106,${p.opacity})`;ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();p.y-=p.speedY;if(p.y<0){p.y=canvas.height;p.x=Math.random()*canvas.width;}});requestAnimationFrame(drawParticles);}
initParticles();drawParticles();onresize=initParticles;

// Hechizo sparkles
document.getElementById('spell-button').onclick=()=>{for(let i=0;i<30;i++)spawnSparkle(innerWidth/2,innerHeight/2);};
function spawnSparkle(x,y){particles.push({x:x+(Math.random()-.5)*200,y:y+(Math.random()-.5)*200,size:Math.random()*4+2,speedX:(Math.random()-.5)*4,speedY:(Math.random()-.5)*4,opacity:1,decay:0.02});}

// Música
onload=()=>{const a=document.getElementById('background-audio');a.volume=0.2;a.play().catch(()=>{});};

// Cambiar casa
document.getElementById('house').onchange=e=>{
let c=document.querySelector('.container');let h=e.target.value;
const styles={gryffindor:['#4b1f1f','#c02b1d','#e25822'],slytherin:['#122d22','#1c8f68','#4ae986'],hufflepuff:['#3c3017','#d9b919','#f3e400'],ravenclaw:['#1a2236','#4f6faa','#7aa7ff']};
if(styles[h]){c.style.background=styles[h][0];c.style.borderColor=styles[h][1];c.style.boxShadow=`0 0 25px ${styles[h][2]}`;}
else{c.style.background='rgba(30,27,23,0.95)';c.style.borderColor='#d4b86a';c.style.boxShadow='0 0 25px #d4b86a';}
};
