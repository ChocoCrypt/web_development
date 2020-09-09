let a = [[1, 2, 3, 4], [3, [4, 5]], 3, 9] ;


function pelar(a){
    pelado = []
    for(let i = 0  ; i<a.length ; a++){
        for(j = 0 ; j<a[i].length ; j++) {
            console.log(a[i][j]);

        }
    }
}





// main    |mar sep  8 22:30:02 -05 2020|
//
console.log(a);

let y = pelar(a)
console.log(y);


