// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt ('Ingrese un numero'));
console.log = (numero);

if((numero % 2) === 0 || (numero % 3) === 0 || (numero % 5) === 0 || (numero % 7) === 0){
    if((numero % 2) === 0){
        document.write('El ' + numero + ' es divisible en 2');
    }if ((numero % 3) === 0){
        document.write('<br>El ' + numero + ' es divisible en 3');  
    }if((numero % 5) === 0){
        document.write('<br>El ' + numero + ' es divisible en 5');
    }if((numero % 7) === 0){
        document.write('<br>El ' + numero + ' es divisible en 7');
    }
}else{
    document.write('El numero ingresado no es divisible en 2, ni en 3, ni en 5 ni en 7');
}

