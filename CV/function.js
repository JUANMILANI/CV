const btnElm = document.getElementById('boton'),
pElm = document.getElementById('contarClick')
contar = 0;

document.getElementById('boton').onclick = function (){
console.log ();
    document.getElementById("demo").innerHTML="Celular: 1157578200";
    document.getElementById("demo").style.fontSize="20px";
    contar++;
    pElm.textContent = contar;
    sbg();
}

const sbg = function(){
const randColor = Math.floor(Math.random() * 16777215).toString(16);
sect.style.backgroundColor = "#" + randColor;
}

pElm.textContent = 0;

