const gasolinas=[{id:'1',tipo:'gasolina',subtipo:'95',precio:2.05,img:"imgs/gasolina.jpg"},
{id:'2',tipo:'gasolina',subtipo:'98',precio:2.18,img:"imgs/gasolina_98.jpg"},
{id:'3',tipo:'diesel',subtipo:'A+',precio:2.30,img:"imgs/diesel.jpg"},
{id:'4',tipo:'diesel',subtipo:'Plus',precio:2.40,img:"imgs/diesel_plus.jpg"},
]

const contenedor=document.getElementById('contenedor')
const contenedor_compra=document.getElementById('contenedor_compra')

const carrito=[]


for (const gasol of gasolinas){
    const divGasolina=document.createElement('div')
    const imagen=document.createElement('img')
    const Tipo=document.createElement('h1')
    const nom_subtipo=document.createElement('h2')
    const precio_prod=document.createElement('h3')
    const comprar=document.createElement('button')



    divGasolina.className='card'
    imagen.className='card-img-top'
    Tipo.className='nombre-producto'
    nom_subtipo.className='nombre-producto'
    precio_prod.className='card-precio'
    comprar.className='btn btn-primary'


    divGasolina.id=gasol.id
    imagen.src=gasol.img
    Tipo.append(gasol.tipo)
    nom_subtipo.append(gasol.subtipo)
    precio_prod.append(`${gasol.precio}`)
    comprar.append('comprar')
    comprar.id = `${gasol.id}`

    

    comprar.onclick = () => {
        const cliente= prompt("cual es tu nombre?")
        const litros= prompt("cuantos litros quieres?")
        const telofono= prompt("cual es tu numero de contacto?")
        const direccion= prompt("cual es tu direccion?")
        const productoComprado = gasolinas.find(gasol => gasol.id === comprar.id);
        
        carrito.push({nom_cliente:cliente,contacto:telofono,envio:direccion, nombre: productoComprado.tipo,subtipo:productoComprado.subtipo, precio: productoComprado.precio,repostaje:litros })
        console.log(carrito)
        const mensaje=alert('gracias '+ carrito[0].nom_cliente + " ha solicitado "+carrito[0].nombre+" "+ carrito[0].subtipo+" tu factura total es "+carrito[0].precio*carrito[0].repostaje)
      }
      
      //Le agregamos al contenedor de la tienda cada uno de los divProducto
      divGasolina.append(imagen, Tipo, precio_prod,nom_subtipo, comprar);
  
    //Le agregamos al contenedor de la tienda cada uno de los divProducto
    contenedor.append(divGasolina)
    
    
}


const imagenes=document.getElementsByClassName('card-img-top')
const respuesta= () => alert("Si tiene dudas sobre como repostar vaya a https://platiniumoil.com/como-saber-que-gasolina-debo-echar-a-mi-coche/#:~:text=La%20pregunta%20%C2%AB%C2%BFera%20di%C3%A9sel%20o,manual%20de%20usuario%20del%20coche." )
for (const element of imagenes){
    element.onclick=respuesta
}
console.log(carrito)

