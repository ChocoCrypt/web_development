// Tarea por Rodrigo Castillo Camargo


// funcion para el radio de coordenadas cartesianas a polares
function radio_polar(x,y){
    try{
        let x =  Number(x)
        let y = Number(y)
        if(!Number.isNaN(x))throw Error('pailas');
        if(!Number.isNaN(x))throw Error('pailas') ;
        if(!Number.isFinite(y))throw Error('pailas') ;
        if(!Number.isFinite(y))throw Error('pailas') ;
        // algoritmo
        let r2 = (x*x) + (y*y);
        let r  = Math.sqrt(r2);
        return(r);
    }
    catch(err){
        return(err)
    }
}

// funcion para el angulo de coordenadas cartesianas a polares
function angulo_polar(x, y) {
    let theta = Math.atan2(x/y) ;
    return(theta)
}


// objeto punto
var Punto = {
    cord_x:1,
    cord_y:2,
    //al intentar definirlo como metodo set, me dice que solamente puede tener un parametro
    set_polar:function(radio,angulo){
        this.cord_x = radio * Math.cos(angulo);
        this.cord_y = radio * Math.sin(angulo);
    },
    //es para mirar la posicion en coordenadas cartesianas
    set_pos:function(x,y){
        try{
            let x = Number(x) ;
            let y = Number(y) ;
            this.cord_x = x;
            this.cord_y = y;
        }
        catch(err){
            return(err) ;
        }
    },
    //retorna el radio
    get radio(){
        return(radio_polar(this.cord_x , this.cord_y))
    },
    // retorna el angulo
    get angulo(){
        let theta =  Math.atan(this.cord_y/this.cord_x);
        return(theta)
    },
    //imprime el radio y las coordenadas cartesianas
    status:function(){
        console.log("x,y : " + this.cord_x +',' + this.cord_y );
        console.log("Radio :" + this.radio);
        console.log("Angulo " + this.angulo );

    }

}

// Prueba
console.log('\n Prueba coordenadas cartesianas');
Punto.set_pos(10,10)
Punto.status();

console.log(' \n Prueba coordenadas polares : ');
Punto.set_polar(Math.sqrt(2),Math.PI/4) ;
Punto.status();





