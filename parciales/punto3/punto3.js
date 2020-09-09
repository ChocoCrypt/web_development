let counter = (function counter(){
let value = 0;
return{
getValue: function(){
return value;
},
changeBy: function(k){
value = +k;
},
}
})();
//este es un contador, recibe un valor y a ese valor le suma un valor k
