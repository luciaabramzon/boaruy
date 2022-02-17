$(() => {
function openNav() {
    document.getElementById("side-menu").style.width = "50%"; // QUE CUBRA LA MITAD DE LA PANTALLA
  }
  
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
  }


    infoCarrito = localStorage.getItem("carrito");
    infoCarrito = JSON.parse(infoCarrito);
    
    let precioTotal=0;
    let cantidadTotal=0
    

    mostrarCarrito()
    function mostrarCarrito() {
        let carritoHTML = "<p>";
        
      for (const id in carrito) {
        let producto = carrito[id];
        let precio= producto.precio*producto.cantidad

        carritoHTML += 
     `<tr class="" id="productoCart_${id}" >
        <th scope="row" class="col-lg-5 col-md-6 col-sm-3 imgProducto">
        <img class="imagenCarrito" src=${producto.imagen} alt="">
        <p class="productoNombreCarrito" >${producto.nombre}</p>
        </th>
        <td  class="col-lg-4 col-md-2 col-sm-6 datosTablaDiv datosCantidad">
        <button class="cantidad-" data-id="${id}" id="cantidadR_${id}" >-</button>
        <p class="cantidadTotal" id="cantidadTotal_${id}">${producto.cantidad}</p>
        <button class="cantidad" data-id="${id}">+</button>
        </td> 
        <td  class="col-lg-2 col-md-2 col-sm-1 datosTablaDiv">
        <p class="datosTabla" id="precio_${id}">$${precio}</p>
        </td> 
        <td  class="col-lg-1 col-md-2 col-sm-1 datosTablaDiv">
        <button class="eliminar" id="eliminar_${id}" >X</button>
        </td> 
        </tr>     `; 

              precioTotal += precio;
                           
}
         carritoHTML += "<p>";
        $("#carritoTabla").html(carritoHTML);
  precio()
  eliminar()
  }

eliminar()

function precio(){
$("#total").html(`Total: $${precioTotal}`)


}
const carritoTabla=$("#carritoTabla")
carritoTabla.click((e)=>{
  btnAccion(e)
  
})

const btnAccion = e =>{
   if(e.target.classList.contains("cantidad")){
    const producto=carrito[e.target.dataset.id]
    producto.cantidad++
    carrito[e.target.dataset.id]={...producto}
    precioTotal=0
    mostrarCarrito()
   
  }
  if (e.target.classList.contains("cantidad-")){
    const producto=carrito[e.target.dataset.id]
    if (producto.cantidad>=1){ 
        producto.cantidad--} else{
          producto.cantidad
        }
   /*  if(producto.cantidad===0){
      delete carrito [e.target.dataset.id]
      console.log( carrito [e.target.dataset.id])
    } */
    precioTotal=0
    mostrarCarrito()
    carritoNumero()
  }

  e.stopPropagation()
}


  function carritoNumero(){
    $("#qCarritoBtn").html(carrito.length)
    eliminar()
}

   function eliminar(){
    let borrar = $(".eliminar");
      for (const btn of borrar) {
        btn.onclick = () => {
          localStorage.getItem("carrito");
          let id = $(btn).attr("id");
       const idNumber = parseInt(id.split("_")[1]);
          console.log(idNumber)
       localStorage.removeItem(
         "carrito",
         carrito.splice(idNumber,1)
       );
       console.log(carrito)
       let carrito2 = JSON.stringify(carrito);
       localStorage.setItem("carrito", carrito2);
        $(`#productoCart_${idNumber}`).remove(); 
        precioTotal=0;
        mostrarCarrito() 
        carritoNumero()
      }} 
      
  }

  $(".botonVaciar").click(()=>{
    alert("eliminar carrito")
    carrito = [];
        localStorage.removeItem("carrito");
        precioTotal=0
        mostrarCarrito()
        carritoNumero()
        
  })

    
})  

