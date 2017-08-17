

var usuariosRegistrados=[];
var log;
var post = [];
var numero ;

function getUsuarios(){
  var storageUsuarios = localStorage.getItem('personaLogueada')
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }
  return usuariosRegistrados;
}
  function getPost() {
  

      var posts = [];
      if (localStorage.getItem('OpenFacebook_post')) {
          posts = JSON.parse(localStorage.getItem('OpenFacebook_post'));
         
      }
    var table = document.getElementById("users_table");
    table.innerHTML = null;
    var n = 0;
      posts.forEach(function(post, index, posts) {
        tabla(post,n++)
      });

    }
function tabla(post,numero) {

        var table = document.getElementById("users_table");
        

        
        // crear una HTML fila
        var row = "<tr><td>"+numero+"</td><td>"+post.logeado+"</td><td>"+post.post+"</td></tr>";

        // agregar a la tabla
        
        table.innerHTML = table.innerHTML + row;
           
        
    }
    function eliminarRow(){
        var logeada =JSON.parse(localStorage.getItem("personaLogueada")).usuario;
      var posts = JSON.parse(localStorage.getItem("OpenFacebook_post"));
      var permiso = 1;
    
     for (var i = 0; i < posts.length; i++) {
       if(posts[i].logeado == logeada ){
          var numero = document.getElementById("elim").value;      
          var table = document.getElementById('users_table');

         table.deleteRow(numero);
          }
    }
     if (permiso == 1) {

      alert("El Post no te pertenece!")
    }
  }

    function editar(){
      var logeada =JSON.parse(localStorage.getItem("personaLogueada")).usuario;
      var posts = JSON.parse(localStorage.getItem("OpenFacebook_post"));
      var permiso = 1;
    
     for (var i = 0; i < posts.length; i++) {
       if(posts[i].logeado == logeada){
          

          }
    if (permiso == 1) {

      alert("El Post no te pertenece!")
    }

    }
}

function login() {
    var emailInterfaz = document.getElementById("usuario").value;
    var passwordInterfaz = document.getElementById("psw").value;
    
    var usuarios = JSON.parse(localStorage.getItem("OpenFacebook_usuarios"));
    var intento = 1;
    for (var i = 0; i < usuarios.length; i++) {
        var email = usuarios[i].correo;
        var pass = usuarios[i].contrasena;
        if(emailInterfaz === email && passwordInterfaz === pass){
           personaLogueada(usuarios[i]);
           log = usuarios[i].usuario;
            window.open("principal.html");
           intento = 0 ;
            break;
        }
    }
    if(intento == 1){
            alert("Usuario o Contraseña Inválida."); 
    }
}

function personaLogueada(persona) {
    localStorage.setItem('personaLogueada', JSON.stringify(persona))
}    

function guardarPost() {

    var name = JSON.parse(localStorage.getItem("personaLogueada")).usuario;
    var post = document.getElementById("comentario").value;
   

    var tojson = 
         
            {
                logeado: name,
                post: post,
            };

    var info = JSON.parse(localStorage.getItem("OpenFacebook_post"));
     
       if(info == null){
            info = [];
             info.push(tojson); 
              localStorage.setItem("OpenFacebook_post", JSON.stringify(info));

                    }else{
                       info.push(tojson);
        localStorage.setItem("OpenFacebook_post", JSON.stringify(info));
                    }
       
        getPost();

}         
function guardar() {

    var name = document.getElementById("nombre").value;
    var id = document.getElementById("usuario").value;
    var email = document.getElementById("correo").value;
    var password = document.getElementById("contrasena").value;

    var tojson = 
         
            {
                "nombre": name,
                "usuario": id,
                "correo": email,
                "contrasena":password
            };

    var info = JSON.parse(localStorage.getItem("OpenFacebook_usuarios"));

    if (info === null) {
        var arrayJson=[];
        arrayJson.push(tojson);
        localStorage.setItem("OpenFacebook_usuarios", JSON.stringify(arrayJson));
    } else {
        info.push(tojson);
        localStorage.setItem("OpenFacebook_usuarios", JSON.stringify(info));
    }
     window.open("login.html");
}         



function cancelar(){

  document.getElementById("usuario").value = "";
  document.getElementById("nombre").value="";
  document.getElementById("correo").value="";
  document.getElementById("contrasena").value = "";
 document.getElementById("contrasena2").value = "";
  }
 




