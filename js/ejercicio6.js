// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numberUno = parseInt(prompt('Ingresa el primer numero'));
let numberDos = parseInt(prompt('Ingresa el segundo numero'));
console.log(numberUno);
console.log(numberDos);

if(numberUno > numberDos){
    document.write('El numero mayor ingresado es: ' + numberUno);
}else if(numberUno < numberDos){
    document.write('El numero mayor ingresado es: ' +  numberDos)
}else{
    document.write('Los numeros ingresados son iguales: ' + numberUno);
}

