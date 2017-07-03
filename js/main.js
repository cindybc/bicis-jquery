$(document).ready(function(){

    $('#registro').click(function(){
	   var nombre= $('#name').val();
	   var apellido= $('#lastname').val();
	   var correo= $('#input-email').val();
	   var contraseña= $('input-password').val();

	   if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
           $('.name-container').append('<span>si funciona</span>');
           $('#name').val("");
	   }
    });
});