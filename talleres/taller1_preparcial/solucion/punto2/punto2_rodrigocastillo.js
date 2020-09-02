// Utilizando el método reduce crear una función que concatene arrays de arrays. Probarlo con el siguiente array:
let a = [[1, 2, 3, 4], [3, [4, 5]], 3, 9] ;


function pelar_array(a){
    let lista = []
    // Recorro todo el arreglo    |dom ago 30 23:35:14 -05 2020|
    for(let i = 0 ;  i<a.length ; i++){
        // declaro los elementos de la lista    |dom ago 30 23:35:35 -05 2020|
        let elem = a[i] ;
        // si los elementos son una lista, las recorro y pusheo los elementos de esta, si no, pusheo el elemento
        if(Array.isArray(elem)){
            // pusheo los elementos de la lista    |dom ago 30 23:37:13 -05 2020|
            for(let j = 0 ;  j<elem.length  ;j++){
                let elem2 = elem[j]
                // hay listas dentro de listas entoncs por eso hice esto, que es la recursion perezosa del anterior
                if(Array.isArray(elem2)){
                    for(let k = 0 ; k<elem2.length ; k++){
                        lista.push(elem2[k])
                    }
                }
                else{
                    lista.push(elem2)
                }
            }
        }
        else{
            lista.push(elem)
        }
    }
    return(lista)
}
//
console.log("input: ");
console.log(a);
console.log("output:");

// imprimo la lista resultado y todo bien    |dom ago 30 23:38:58 -05 2020|
console.log(pelar_array(a));


