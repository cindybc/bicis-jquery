$(document).ready(function(){

    $('#registro').click(function(){
	   var nombre= $('#name').val();
	   var apellido= $('#lastname').val();
	   var correo= $('#input-email').val();
	   var contraseña= $('#input-password').val();

	   if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
           $('.name-container').append('<span>si funciona</span>');
           $('#name').val("");
	   }
	   if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido))){
	   	   $('.lastname-container').append('<span>si funciona</span>');
           $('#lastname').val("");
	   }
	   if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(correo))){
           $('.email-container').append('<span>si funciona</span>');
           $('#input-email').val("");
	   }
	   if(contraseña == "" || contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "098754"){
           $('.password-container').append('<span>si funciona</span>');
           $('#input-password').val("");
	    }
    });
});