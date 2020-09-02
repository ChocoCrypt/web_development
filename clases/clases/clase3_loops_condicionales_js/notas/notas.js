// Basic Stuff    |vie ago 14 11:09:29 -05 2020|
var var1 = "Hola " 
var var2 = "Desarrolladores" 
console.log(var1 + var2);


// Tipo de datos    |vie ago 14 11:09:24 -05 2020|
console.log('Tipos de datos:');
var tipo = typeof("10"); 
var tipo2 = typeof(10);
var tipo3 = typeof(undefined);
var tipo4 = typeof(null) ;
// como cosa estupida, js da igual undef y null
var comparacion_verdadera = tipo3 === tipo4 ;
var bool = true //false ;
var infinito = (NaN);
console.log(tipo , tipo2 ,  tipo3 , tipo4 , comparacion_verdadera , bool , infinito);


// Operadores logicos basicos    |vie ago 14 11:18:20 -05 2020|
console.log('Operaciones logicas:');
var a = true ;
var b = false;
var c = 4;
var d = 6 ;
var igual = a==b;
var mayor = a>b ;
var menor = a<b;
var comp_num = a&b ;
var comp_boll = a&&b ;
console.log(a,b,c,d,igual,mayor , menor , comp_num , comp_boll);




// Funciones    |vie ago 14 11:33:15 -05 2020|
//se puede guardar funciones en una variable
var saludo = function(nombre){
    return('hola' + nombre)
}
//funcion normal
function nombre_func(a,b,c){
    return(a + b + c)
}
console.log(saludo(' jaja'));




// Operadores condicionales    |vie ago 14 11:39:37 -05 2020|
if(true){
    console.log('el if sirvio melo melo');
}
else{
    console.log('el if salio falso');
}





// Clases    |vie ago 14 12:22:20 -05 2020|
var fecha = new Date() ;
var minutes = fecha.getMinutes()





// Ejercicio     que retorne un objeto de tipo date que retorne un saludo  y que le diga a la persona que tan lejos se encuentra del fin de semana|vie ago 14 12:08:24 -05 2020|
// si es lunes o martes, que diga que falta mucho para el fin de semana
// si es miercoles o jueves que diga que ya casi
// si es viernes diga que ya es fin de semana


function dia_ficho(dia){
    switch(dia){
        case 1:
        case 2:
            console.log('falta mucho para el fin de semana');
            break
        case 3:
        case 4:
            console.log("ya casi es fin de semana");
            break
        case 5:
        case 6:
        case 7:
            console.log("es fin de semana");
        default:
            console.log("dia que no existe wtf man");
            break
    }
}


var fecha  = new Date ;
var dia = fecha.getDay() ;
console.log("el dia es" , dia);


console.log(dia_ficho(dia));


















