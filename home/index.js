function openNav() {
    document.getElementById("side-menu").style.width = "50%"; // QUE CUBRA LA MITAD DE LA PANTALLA
  }
  
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
  }


  $(()=> {

    $("#cerrarModal").click(()=>{
      $(".modal").toggle("slow")
    })
  
    let infoCarrito=localStorage.getItem("carrito")
    if(infoCarrito)
    carrito=JSON.parse(infoCarrito)


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

  let destacados1 = productos[Math.floor(Math.random()*productos.length)];
  let destacados2 = productos[Math.floor(Math.random()*productos.length)];
  let destacados3 = productos[Math.floor(Math.random()*productos.length)];
 
    $("#prodDestacados1").append(
        `<div class="productos col-sm-12 ">
         <img class="imgProductos"  src=${destacados1.imgIndex} alt="">
            <p class="textoProductoDestacados">${destacados1.nombre} </p>
            <p class="textoProductoDestacados">Precio $ ${destacados1.precio} </p>
            <button id="producto_${destacados1.id}" class="btnCarrito" > Comprar</button></a>
        </div>`
    )
    $(`#producto_${destacados1.id}`).click(()=>{
      guardarCarrito(destacados1)
       
    })
 
 
    $("#prodDestacados2").append(
      `<div class="productos col-sm-12">
       <img class="imgProductos"  src=${destacados2.imgIndex} alt=""> 
          <p class="textoProductoDestacados">${destacados2.nombre} </p>
          <p class="textoProductoDestacados">Precio $ ${destacados2.precio} </p>
          <button id="producto_${destacados2.id}" class="btnCarrito" >Comprar</button></a>
      </div>`
  )
  $(`#producto_${destacados2.id}`).click(()=>{
    guardarCarrito(destacados2)
     
  })

   
  $("#prodDestacados3").append(
    `<div class="productos col-sm-12">
     <img class="imgProductos"  src=${destacados3.imgIndex} alt=""> 
        <p class="textoProductoDestacados">${destacados3.nombre} </p>
        <p class="textoProductoDestacados">Precio $ ${destacados3.precio} </p>
        <button id="producto_${destacados3.id}" class="btnCarrito" > Comprar</button></a>
    </div>`
)
  $(`#producto_${destacados3.id}`).click(()=>{
  guardarCarrito(destacados3)
   
}) 

  $("#enviar").click(()=>{
    console.log(1)
    $("#mensaje").fadeIn("slow")
  })

})
 