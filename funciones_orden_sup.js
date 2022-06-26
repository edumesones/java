// ABSTRACCION
 // funciones orden superior, recibe datos o funcion y devuelve output u otra funciom

function mayorque(n){
    return numero => numero>n
}

let mayorque10=mayorque(10);
let mayorque13=mayorque(13);


console.log(mayorque10(15))
console.log(mayorque10(9))
console.log(mayorque13(9))


function asignaroperacion(op){
    if(op=="sumar"){
        return(a,b)=>a+b
    }else if(op=="restar"){
        return (a,b) =>a-b
    }else if (op =="multiplicar"){
    return (a,b) => a*b
    }else {return (a,b) => a/b}
}

const suma=asignaroperacion("sumar")
const restar=asignaroperacion("restar")

console.log(suma(10,20))


// recibir funciones por parametro

let porcadauno = (arra,funcion) =>{
    for (const elemento of arra){
        funcion(elemento)
    }
    
}
numerosDuplicados=[]
//recordar llamada al nuevo array
const  funcionAnonima = (numero) => numerosDuplicados.push(numero*2)
const edu=[1,2,3,4,5]
let ejecutar=porcadauno(edu,funcionAnonima)
//lo que ha cambiado es numeros duplicados 2,
// 1 la funcion por cada uno te va rrecoriendo todos los elementos del array y en la fucion funcionanonima vas generando el array multiplicado por dos, el cambio se hace en ese array
console.log(numerosDuplicados)


//recordar llamar al nuevo elemento
let total=0
function acumular(num){
    total+=num
}

let ejecutaracumulado=porcadauno(numerosDuplicados,acumular)

console.log(total)
