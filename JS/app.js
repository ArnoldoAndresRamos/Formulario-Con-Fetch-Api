var formulario = document.getElementById('formulario');
var respuesta  = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('mefksdfkjdkfskdjfklsd');
    var datos = new FormData(formulario);

    fetch('post.php', {
        method:'POST',
        body:datos
        })  
    
    .then(res=>res.json())
    .then(data=>{
        if(data ==='error'){ 
            respuesta.innerHTML= `
            <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div
            `
        }else{
            respuesta.innerHTML= `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div
            `
        }
      })
 })