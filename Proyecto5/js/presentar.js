//primer card
document.getElementById('titulo').innerHTML="Cambie el texto de H3";
//segundo card
var nombre = "Enrique";
var apellido = "Huaman";
//tercer card
function ver(){
	var nombre = "Juan";
	var apellido = "Perez";
	document.getElementById('titulo2').innerHTML=nombre+apellido;
}
//cuarto card
function ver1(){
	var nombre = "Maria";
	var apellido = "Robles";
	document.getElementById('titulo3').innerHTML=nombre+apellido;
}
document.getElementById('boton3').onclick=function(){ver1()};
//suma de dos numeros
function suma(){
	var s1 = Number(document.getElementById('vs1').value);
	var	s2 = Number(document.getElementById('vs2').value);
	var Resultado = s1+s2;
	document.getElementById('Rs').innerHTML=Resultado;
	//window.alert('Buen trabajo');
	Swal.fire({
	  title: 'Error!',
	  text: 'Do you want to continue',
	  icon: 'error',
	  confirmButtonText: 'Cool'
	})
}
document.getElementById('boton4').onclick=function(){suma()};