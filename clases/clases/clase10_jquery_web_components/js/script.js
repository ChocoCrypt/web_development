
console.log("buena perro");

let parrafito = document.querySelector("#divsito");
//parrafito.addEventListener("mouseover" , () => (alert("pasaste sobre divsito")));

let intento = document.querySelector("#divsito");

intento.addEventListener("mouseover" , () => (agarrarcoordenadas(intento)));
intento.addEventListener("mouseover" , () => (mover(intento)));

function agarrarcoordenadas(elemento){
    let x = elemento.offsetLeft;
    let y = elemento.offsetTop;
    console.log(x);
    console.log(y);
}

function mover(elemento){
    elemento.offsetTop = elemento.offsetTop +10;
    elemento.offsetLeft = elemento.offsetLeft +10;
    
    console.log("se deberia haber movido");

}

