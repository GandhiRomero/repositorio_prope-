//Esta funcion tiene como objetivo sumar dos numero
function sumar({
    var numero1=document.getElementById("inputNumero1");
    var numero2=document.getElementById("inputnumero2");
//operar la suma de las variables
var resultado= parseInt(numero1.value)+parseInt(numero2.value);

//sirve para poner el resultado en la tex area

var area=document.getElementById("area");
area.value="El resultado de "+numero1+" y "+numero2" es "+resultado;
numero.value="la suma de"