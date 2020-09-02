



function herencia(p) {
if (p == null) throw TypeError(); // si lo que recibe la funcion herencia no retorna nada, pailas    |lun ago 31 13:49:30 -05 2020|
var t = typeof p; // guarda en t el tipo de variable p
if (t !== "object" && t !== "function") throw TypeError(); // si la variable p no es un objeto y t no es una funcion,  pailas
function f() {}; // preguntarle a dora porque niidea
f.prototype = p; // pailas niidea que es la funcion prototype
return new f(); // retorno esa function prototype que no se de donde salio
}


