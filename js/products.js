//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


    var listaProductos = [];
    
    function mostrarArticulos(arreglo){
        let lugar;
        let texto='';
        for(let i=0; i<arreglo.length; i++){
            lugar=arreglo[i];
            texto+="<tr><td><img class='ParrillaProductos' src='"+lugar.imgSrc+"' alt=''></td><td><p>"+lugar.name+"<br>"+lugar.description+"</p></td><td><p>"+lugar.currency+lugar.cost+"<br>Stock disponible:"+lugar.soldCount+"</p></td></tr>"
        }
        document.getElementById('parrilla').innerHTML=texto;
    }


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(devolucion){
        if(devolucion.status === 'ok'){ 
            listaProductos = devolucion.data;
            mostrarArticulos(listaProductos);
        }
    })
})
getJSONData(PRODUCTS_URL).then(function(devolucion){
    if(devolucion.status === 'ok'){ 
        listaProductos = devolucion.data;
        mostrarArticulos(listaProductos);
    }
})