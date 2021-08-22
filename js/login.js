//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    function verificar(){
        
    }

    
});
function ingresar(){
    let usuario=document.getElementById("User");
    let password=document.getElementById("Pass");
    if (password.value.trim()===""||usuario.value.trim()===""){
        alert("Campo vacio")
    }else{
        location.href="index.html"
    }
}