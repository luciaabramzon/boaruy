function openNav() {
    document.getElementById("side-menu").style.width = "50%"; // QUE CUBRA LA MITAD DE LA PANTALLA
  }
  
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
  }

  $(()=> {
    
    mostrarCarrito()
    let infoCarrito=localStorage.getItem("carrito")
    if(infoCarrito)
    carrito=JSON.parse(infoCarrito)

    let detalle=[]
  
    function carritoNumero(){
        $("#qCarritoBtn").html(carrito.length)
    }
   
    function guardarCarrito(compra){
        carrito.push(compra)
        let carritoString=JSON.stringify(carrito);
        localStorage.setItem("carrito",carritoString)
        carritoNumero()
    }
    
    carritoNumero()

    function mostrarCarrito(){ 
for (const producto of productos){
    $("#productosSugeridos").append(
        `
        <div class="productos col-lg-4 col-sm-12">
        <a  href="../producto/producto.html" class="divVerMas"> <img class="imgProductos" id="verMas_${producto.id}"  src=${producto.imagen} alt="">  </a>
            <p class="textoProductoDestacados">${producto.nombre} </p>
            <p class="textoProductoDestacados"> ${producto.precio} </p>
            <button id="producto_${producto.id}" class="btnCarrito col-lg-5" > Comprar </button></a>
            </div>`
     /*        `
            <div class="productos col-lg-4 col-sm-12">
             <img class="imgProductos"  src=${producto.imagen} alt=""> 
                <p class="textoProductoDestacados">${producto.nombre} </p>
                <p class="textoProductoDestacados"> ${producto.precio} </p>
                <div id="botones">
                <button id="producto_${producto.id}" class="btnCarrito col-lg-5" > Comprar </button></a>
                <a  href="../producto/producto.html"><button class="btnCarrito col-lg-5" id="verMas_${producto.id}"> Ver </button>  </a>
                </div>
                </div>` */
    )
    $(`#producto_${producto.id}`).click(()=>{
      guardarCarrito(producto)
       
    })

$(`#verMas_${producto.id}`).click(()=>{
 detalle.push(producto)
 let detalleString=JSON.stringify(detalle);
 localStorage.setItem("detalle",detalleString)
/*  let detalleProducto=localStorage.getItem("detalle")
 let prodDetalle=JSON.parse(detalleProducto)
 console.log(prodDetalle) */
})  


}
}

detalleProducto=localStorage.getItem("detalle")
 prodDetalle=JSON.parse(detalleProducto)
  console.log(prodDetalle)

     
  for (const detalle of prodDetalle){
    $("#producto").append(
      `<div class="col-lg-4 col-sm-4 fotoProducto" id="fotoDetalle" >
      <img class="imagenProducto" src=${detalle.imagen} alt=""> 
     </div>
     <div class="row col-lg-6 col-sm-8  columnaProducto">
         <div class="datos">
             <img class="datosProducto" src=${detalle.descripcion} alt="">
         </div>
         <div class="datos">
             <img class="datosProducto datosMedia" src=${detalle.descripcionAbajo} alt="">
         </div>
         <div class="row comprar lg-6" id="botonComprar">
         <button id="producto_${detalle.id}" class="btnCarrito col-lg-5" > Comprar</button></a>
             </div>
         </div>
     </div>`
    )
    $(`#producto_${detalle.id}`).click(()=>{
      guardarCarrito(detalle)
      detalle=[]
      localStorage.getItem("detalle")
       
    })
  }

  $("#btnPagar").click(()=>{
    localStorage.getItem("carrito")
    localStorage.removeItem("carrito");
    carrito = [];
    detalle= []
    carritoNumero()
    alert("Su compra esta siendo realizada")
})


$("#enviar").click(()=>{
  console.log(1)
  $("#mensaje").fadeIn("slow")
})

})



/* for (const producto of productos){
  $("#productosSugeridos").append(
      `
      <div class="productos col-lg-4 col-sm-12">
       <a class="verMas" href="../producto/producto.html"><img class="imgProductos"  src=${producto.imagen} alt=""> </a>
          <p class="textoProductoDestacados">${producto.nombre} </p>
          <p class="textoProductoDestacados"> ${producto.precio} </p>
          <div id="botones">
          <button class="btnCarrito col-lg-5" id="verMas_${producto.id}" > Ver descripcion </button>
          <div id="ver_${producto.id}" style=" display:none">
            <img class="imgVerMas" src=${producto.descripcion}>
            </div>
          <button id="producto_${producto.id}" class="btnCarrito col-lg-5" > Añadir al carrito</button></a>
          </div>
          </div>`
  )
  $(`#producto_${producto.id}`).click(()=>{
    guardarCarrito(producto)
     
  })

$(`#verMas_${producto.id}`).click(()=>{

$(`#ver_${producto.id}`).toggle("slow");
})  
} */