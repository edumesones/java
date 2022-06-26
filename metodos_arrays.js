// ForEach, find, filter,some,map,reduce,sort 
let total=0
numeros=[1,2,3,4,5]
numeros.forEach((element) => 
    total+=element);

console.log(total)


duplicados=[]
numeros.forEach((numero) => duplicados.push(numero*10));
console.log(duplicados)


nombres=["edu","juan","cris"]
saludos=[]
nombres.forEach((nombre) => saludos.push("Hola "+nombre + "maquina"));
console.log(saludos)

//// FIND
const anadir={id:4,producto:"galletas","precio":10};
const objetos=[{id:1,producto:"pan","precio":8},{id:2,producto:"leche","precio":4},{id:3,producto:"zumo","precio":6}];

objetos.push(anadir)

const buscar= objetos.find(objeto => objeto.producto=="pan" )

// te devuelve el elemento del array completo

console.log(buscar)

///FILTER

const filtrado=objetos.filter(objeto => objeto.producto.includes("gall"))


console.log(filtrado)
//devuelve true o false

const encontrar=objetos.some(objeto => objeto.producto.includes("gall"))
console.log(encontrar)

//MAP: hace una funcion sobre el array

const  productosIVA=objetos.map(objeto => {return{id:objeto.id,producto:objeto.producto,IVA:objeto.precio+(objeto.precio*1.21)}})


console.log(productosIVA)

//reduce:retorna un unico valor del array

const  carritototal=objetos.reduce((acumulador,objeto) => acumulador + objeto.precio,0)

//const  carritototal=objetos.reduce((acumulador,objeto) => acumulador + objeto.precio*1.21,0) seria lo mismo que lo de abajo, sin crear un nuevo bucle ni array

const  carritototalIVA=productosIVA.reduce((acumulador,objeto) => acumulador + objeto.IVA,0)

console.log(carritototal)
console.log(carritototalIVA)

//SORT, ordenar array
ordena_mayor_menor.sort((a,b)=>a-b) //mayor a menor

const compara_nombres=[{"name":"Edu"},{"name":"Cris"},{"name":"Pablo"},{"name":"YOsue"}]
compara_nombres.sort((a,b)=>{
    if (a.name >b.name){return 1}
    if (a.name<b.name){
        return -1
    }
    return 0
})
console.log(compara_nombres)