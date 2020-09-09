// Crear una clase que reciba reciba un array como parámetro con tres métodos, uno que calcule
//la media, uno que calcule la varianza y un método estático que use la información de otra instancia
//de la misma clase y que calcule la correlación entre los dos elementos. Añadir las correspondientes
//excepciones.    |lun ago 31 00:04:42 -05 2020|
//


test = [1,2,3,4,5,6,7,8,9]


class punto3{
    constructor(lista){
        this.lista = lista ;
    }
    get mean(){
        let num = 0 ;
        for(let i = 0 ;  i<this.lista.length ; i++){
            num += this.lista[i];
        }
        return (num/this.lista.length );
    }

    get vari(){
        let num = 0 ;
        for(let i = 0 ;  i<this.lista.length ; i++){
            num += (this.lista[i] - this.mean) * (this.lista[i] - this.mean) ;
        }
        return(num/this.lista.length) ;
    }
}


punto = new punto3(test)


console.log(punto.mean);
console.log(punto.vari);


