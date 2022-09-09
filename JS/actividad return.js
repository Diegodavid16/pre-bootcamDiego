


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

 //hello
 //result is 15

 /**/

 
 
 function numPlus(num) {
    console.log('num is', num);
    return num+15;
}


var result = numPlus(3);
console.log('result is', result);

//var result = num(3) + 15 = 18
//console.log 18




var num = 15;

console.log(num);

function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);


console.log(result);

console.log(num);

//declara una variable num = 15;
//Muestra la variable num = 15;
//Creamos una funcion que muestra el dato ingresado.
//Asignamos a la variable "result" la funcion llamada "logAndReturn".
//luego mediante console.log llamamos a la funcion.
//y nos mostrata 10 y 15.



var num = 15;
console.log(num);

function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}

//La funcion timeTwo; al llamar la funcion me muestra el parametro luego lo multiplica por 2
//ejemplo si ingreso 10 = me va a mostrar 10 luego lo multiplica por 2 = 20

var result = timesTwo(10);

console.log(result);

 console.log(num);

console.log(num) = 15

console.log(result) = 20




function timesTwoAgain(num) {
    console.log('num is', num);
    
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//se declara la funcion timesTwoAgain
//se crea la variable result por ahora con valor indefinido
//se declara la funcion de timesTwoAgain que es igual a 3 + timeTwoAgain que es igual a 5 
//ahora cada numero se multimplica por 2; 3 por 2 queda en 6 y 5 por 2 queda en 10; ahora sumo ambos numeros y queda en 16


console.log(result) = 16





function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

 
 //se declara la funcion sunNums con valores indefinidos
 //con el primer console.log sabemos que el num1 es igual a 2 y el num2 es igual a 3 

 console.log(sunNums) = 5

 //con el segundo console.log sabemos que num1 y num2 quedan en 3 y 5 ahora sumamos

 console.log(sunNums) = 8




 
 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 
 //con el primer console.log sabemos que num1 vale 2 y con el segundo console.log sabemos que num1 es 3 sique num1 vale 2 y 3

 console.log(printSunNums) = 5

 console.log(printSumNums) = 8




 
 function sumNums(num1, num2) {
   
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}//se declara la funcion sunNums con valores indefinidos 
//sabemos que num1 tiene el valor de 2 y 3 y num2 tiene el valor de 3 y 5
//sumo num1 y num2 con el primer valor que tienen que seria 2 + 3 = 5  y luego sumamos con sus segundos resultados que seria 3 + 5 = 8 y por ultimo sumamos ambos resultados 


var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

console.log(13)




 sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);




console.log(result) = 19