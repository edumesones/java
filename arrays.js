const anadir={id:4,producto:"galletas"};
const objetos=[{id:1,producto:"pan"},{id:2,producto:"leche"},{id:3,producto:"zumo"}];

objetos.push(anadir)


//creamos funcion añade array //

class producto {
    constructor(id,nombre){
        this.id=id
        this.producto=nombre

    }
}

objetos.push(new producto(5,"yogur"))

//console.log(objetos)


for (const objeto of objetos){
    console.log(objeto.id + " "+ objeto.producto);
}