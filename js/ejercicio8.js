// 8.- Escribe un programa que pida un número y diga si es divisible por 2
let resultado, n;
let numero = parseInt(prompt('Ingrese un numero')); 

if((numero % 2) === 0){

    document.write('El numero '+ numero + ' es divisible en 2 ');
}else{
    document.write('El numero ingresado no es divisible en 2');
}
