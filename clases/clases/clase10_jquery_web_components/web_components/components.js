class saludar extends HTMLElement{
    constructor(){
        super();
        this.saludo = "hola capo";
    }

    connectedCallback(){
        console.log("aca se crea un saludo personalizado");
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