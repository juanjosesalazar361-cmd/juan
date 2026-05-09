const mensajes=[
"Eres la mejor mamá 💙",
"Gracias por todo mamá",
"Tu amor ilumina mi vida",
"Eres mi estrella favorita",
"Te amo muchísimo",
"Eres mi inspiración",
"Mamá eres increíble",
"Siempre estaré contigo"
];

const starsContainer=document.getElementById("stars");

/* estrellas */

for(let i=0;i<70;i++){

let star=document.createElement("div");
star.className="star";

star.style.top=Math.random()*100+"vh";
star.style.left=Math.random()*100+"vw";

star.onclick=()=>{

let mensaje=document.createElement("div");

mensaje.innerText=
mensajes[Math.floor(Math.random()*mensajes.length)];

mensaje.style.position="absolute";
mensaje.style.top=star.style.top;
mensaje.style.left=star.style.left;
mensaje.style.color="#7ee7ff";
mensaje.style.fontSize="18px";
mensaje.style.textShadow="0 0 10px #7ee7ff";

document.body.appendChild(mensaje);

setTimeout(()=>{
mensaje.remove();
},2000)

};

starsContainer.appendChild(star);

}

/* lluvia de petalos */

function lluviaPetalos(){

let petalo=document.createElement("div");
petalo.className="petalo";
petalo.innerHTML="❀";

petalo.style.left=Math.random()*100+"vw";
petalo.style.animationDuration=
3+Math.random()*5+"s";

document.body.appendChild(petalo);

setTimeout(()=>{
petalo.remove();
},8000)

}

setInterval(lluviaPetalos,500);

/* lluvia de corazones */

function lluviaCorazones(){

let corazon=document.createElement("div");
corazon.className="corazon";
corazon.innerHTML="💙";

let x=Math.random()*window.innerWidth;

corazon.style.left=x+"px";
corazon.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(corazon);

let tiempo=parseFloat(corazon.style.animationDuration)*1000;

setTimeout(()=>{

corazon.remove();

let explosion=document.createElement("div");
explosion.className="explosion";
explosion.innerHTML="💙";

explosion.style.left=x+"px";
explosion.style.bottom="0px";

document.body.appendChild(explosion);

setTimeout(()=>{
explosion.remove();
},1000)

},tiempo)

}

setInterval(lluviaCorazones,800);