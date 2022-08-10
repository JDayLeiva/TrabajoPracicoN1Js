// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


let numero = parseInt(prompt ('Ingrese un numero'));

if((numero % 2) === 0){
    document.write('El ' + numero + ' es divisible en 2');
}else if ((numero % 3) === 0){
    document.write('El ' + numero + ' es divisible en 3');  
}else if((numero % 5) === 0){
    document.write('El ' + numero + ' es divisible en 5');
}else if((numero % 7) === 0){
    document.write('El ' + numero + ' es divisible en 7');
}else {
    document.write('El numero ingresado no es divisible en 2, ni en 3, ni en 5 ni en 7');
}
