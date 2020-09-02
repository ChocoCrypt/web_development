// clase persona normal    |mié ago 26 16:05:12 -05 2020|
class persona{
    constructor(nombre,peso,estatura){
        this.nombre =  nombre ;
        this.peso = peso ;
        this.estatura = estatura ;
    }
    static compararmasa(persona1, persona2){
        let icmp1 = persona1.peso /persona1.altura **2;
        let icmp2 = persona2.peso /persona2.altura**2;
        if(icmp1>icmp2){
            console.log("jaja");
            return("persona 1")
        }
        else{
            console.log("jeje");
            return("persona 2")
        }
    }
}

// clase gato    |mié ago 26 16:05:21 -05 2020|
class Gato{
    constructor(nombre){
        this.nombre = nombre;
    }
    pedircomida(){
        console.log(this.nombre + " quiere comer");
    }
}
// clase gato montes que se extiende del gato    |mié ago 26 16:05:26 -05 2020|
class GatoMontes extends Gato{
    pedircomida(){
        console.log(this.nombre + " quiere comida con estilo");
    }
}

// declaro las clases    |mié ago 26 16:05:39 -05 2020|
rodrigo =  new persona("rodrigo" , 100 , "1.90");
juan =  new persona("juan" , 100 , "2.25");
supercat = new Gato("cat");
superdog = new GatoMontes("catdog");

// las llamo y bre    |mié ago 26 16:05:48 -05 2020|
persona.compararmasa(rodrigo,juan);
supercat.pedircomida();
superdog.pedircomida();



