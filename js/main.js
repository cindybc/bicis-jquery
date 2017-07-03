$(document).ready(function(){

    $('#registro').click(function(){
	  
	   var contraseña= $('#input-password').val();

	   if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test($('#name').val()))){
           $('.name-container').append('<span class="validar">Debe ingresar su nombre.(Solo caracteres de la A-Z)</span>');
           $('#name').val("");
	   }else{
	   	$('#name').val("");
	   	$('.validar').hide();
	   }
	   if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test($('#lastname').val()))){
	   	   $('.lastname-container').append('<span class="validar">Debe ingresar su apellido.(Solo caracteres de la A-Z)</span>');
           $('#lastname').val("");
	   }else{
	   	 $('#lastname').val("");
	   	$('.validar').hide();
	   }
	   if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#input-email').val()))){
           $('.email-container').append('<span class="validar">Ingrese un email valido.(correo@mail.com)</span>');
           $('#input-email').val("");
	   }else{
	   	$('#input-email').val("");
	   	$('.validar').hide();
	   }
	   if(contraseña == "" || contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "098754"){
           $('.password-container').append('<span class="validar">Ingrese su contraseña.(Debe ser mayor a 6 caracteres)</span>');
           $('#input-password').val("");
	    }else{
	    	$('#input-password').val("");
	    	$('.validar').hide();
	    }
    });
});