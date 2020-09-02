// hacer una funcion que calcule el factorial de un numero    |mié ago 19 15:32:18 -05 2020|

function factorial(x){
    try{
        x = Number(x);
        if(x == "") throw Error("el numero no puede ser vacio");
        if( !Number.isInteger(x)) throw Error("el numero tiene que ser entero");
        if(x < 0) return Error ("el factorial de un numero negativo no se si tenga sentido");
        var n = 1 ;
        for( i = 1 ;  i<=x ; i++){
            n *= i ;
        }
        return(n)
        }
    catch(err){
        console.log("pailas");

    }

}




k =  factorial(5) ;
console.log(k);

