/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');

function validarFormulario(event) {

  event.preventDefault();

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;
  
  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
  
  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo,
  };

  manejarErrores(errores);

  // const esExito = manejarErrores(errores) === 0;
  
  // if (esExito) {
  //   $form.className = 'oculto';
  //   document.querySelector('#exito').className = '';
  //   setTimeout(() => {
  //     window.location.href = 'wishlist.html';
  //   }, 5000);
  // }

  console.log(nombre);
  console.log(ciudad);
  console.log(comportamiento);
  console.log(descripcionRegalo);

}


function validarNombre(nombre) {
  
  if (nombre === '') {
    return 'Este campo debe tener al menos 1 caracter';
  }

  if (nombre.length > 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }

  if (!/^[a-zA-Z ]+$/.test(nombre)) {
    return 'El campo nombre solo puede tener letras';
  }

  return '';

}

function validarCiudad(ciudad) {

  if (ciudad === '') {
    return 'El campo ciudad no puede estar vacio';
  }

  if (ciudad.length > 50) {
    return 'El campo ciudad debe tener menos de 50 caracteres';
  }

  if (!/^[a-zA-Z ]+$/.test(ciudad)) {
    return 'El campo ciudad solo puede tener letras';
  }

  return '';

}


function validarDescripcionRegalo(descripcionRegalo) {  
  if (descripcionRegalo === '') {
    return 'El campo descripcion regalo no puede estar vacio';
  }

  if (descripcionRegalo.length > 100) {
    return 'El campo descripcion regalo debe tener menos de 100 caracteres';
  }

  if (!/^[a-zA-Z0-9 ]+$/.test(descripcionRegalo)) {
    return 'El campo descripción regalo solo puede tener letras y números';
  }

  return '';

}

function manejarErrores(errores) {

  errorNombre = errores.nombre;
  errorCiudad = errores.ciudad;
  errorDescripcionRegalo = errores['descripcion-regalo'];


  if (errorNombre) {
    $form.nombre.className = 'error';
  } else {  
    $form.nombre.className = '';
  }

  if (errorCiudad){
    $form.ciudad.className = 'error';
  } else{
    $form.ciudad.className = '';
  }

  if(errorDescripcionRegalo){
    $form["descripcion-regalo"].className = 'error';
  } else{
    $form["descripcion-regalo"].className = '';
  }
  

}

$form.onsubmit = validarFormulario;
