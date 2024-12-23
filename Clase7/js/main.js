/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

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

