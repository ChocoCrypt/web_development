
//punto 1-4
tablero_juego = document.createElement('div');
tablero_juego.setAttribute('class' , 'punto2');
tablero_juego.setAttribute('id' , 'tablerito');
tablero_juego.setAttribute('gridTemplateColumns' , "6")

document.getElementsByTagName("body")[0].appendChild(tablero_juego);


bichos = [];

for (let i = 0 ; i<32 ; i++){
     bicho = document.createElement("div");
     bicho.setAttribute("class" ,"cpunto2");
     bicho.innerText = i + 1;
     let tam = i + 'px' ;
     bicho.style.fontSize = tam
     bichos.push(bicho);
}


for (let i = 0 ; i<bichos.length; i++){
    tablero_juego.appendChild(bichos[i])
}
//tablero_juego.style.gridTemplateColumns = repeat(Math.sqrt(bichos.length ,auto));
//Preguntar como cambiar el tamaño del grid


class saludar extends HTMLElement{
    constructor(){
        super();
        this.saludo = "hola capo";
    }

    connectedCallback(){
        console.log("aca se crea un saludo personalizado");
        this.setAttribute("class" , "cpunto2");
    }

    attributeChangedCallback(nombre, valor_anterior, nuevo_valor){
        this.innerHTML  = this.saludo + nombre;
        console.log("se ha cambiado el nombre");
    }

    static get observedAttributes(){
        return ["nombre"];
    }
}


window.customElements.define("algo-personalizado",saludar) ;