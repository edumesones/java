//la idea es hacer un simulador de tal manera que que cada vez que una persona le gustgará pedir gasolina a domicilio la pudiera tener
// en ella incluyo, nombre, edad, domicilio, repostaje, plus (el plus es cuanto estarias dispuesto a pagar como extra para que te la llevaran a casa, es simplemente una demo para saber
// si seria interesante incluir un servicio de gasolina a domicilio

let beneficio_acumulado=0
let numero_nuevos_clientes=0
let edad_media=0
let edad_total=0
let factura_total=0
//const  carritototal=objetos.reduce((acumulador,objeto) => acumulador + objeto.precio,0)


class total_compras{
    constructor(nombre,apellido,edad,distancia,repostaje,plus,empresa) {
    this.compra;
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.distancia=distancia
    this.repostaje=repostaje
    this.plus=plus
    this.empresa=empresa
    }
    factura(){
        if (this.empresa.toUpperCase()==="SI"){
           factura_total =  this.repostaje + this.plus
           return factura_total
        }else{
            factura_total =  (this.repostaje*1.21) + (this.plus*1.21)
            return factura_total
        }
        
    }
    
        

 };
const compras_virtuales=[];

let finalizar="SI"
while(finalizar != "NO" ){
    
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    let compra=new total_compras({nombre:"",apellido:"",edad:"",distancia:"",repostaje:"",plus:"",empresa:"",factura_total:""})
    compra.nombre=prompt('¿Cual es tu nombre?')
    compra.apellido=prompt('¿Cual es tu apellido?')
    compra.edad=Number(prompt('¿Cuanto años tienes?'))

    compra.distancia=prompt('¿A cuantos km vives de la gasolinera?')
    compra.repostaje=Number(prompt('¿Cuanto querrias repostar?'))
    compra.plus=Number(prompt('¿Cuanto plus estarias disupuesto a pagar?'))
    compra.empresa=prompt('¿Quieres pagar a nombre de empresa?')
    compra.factura_total=compra.factura()
    alert('muchas gracias tu simulacion de compra se ha registrado, tu factura total es '+ compra.factura())
    alert('en un futuro te llevariamos a una pasarela de pago')
    compras_virtuales.push(compra);
    finalizar=prompt('¿quieres repetir?')
}
numero_nuevos_clientes=compras_virtuales.length

compras_virtuales.forEach(element => { beneficio_acumulado += element.factura_total}
);
compras_virtuales.forEach(element => { edad_total += element.edad}
    );
edad_media=edad_total/compras_virtuales.length
console.log(compras_virtuales)
alert("tu numero de clientes nuevos es "+ numero_nuevos_clientes)
alert("tu beneficio obtenido total por dar este servicio es "+ beneficio_acumulado)
alert("la edad media de tus clientes es " + edad_media)



// Guardo el objeto como un string