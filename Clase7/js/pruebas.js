function probarValidarNombre() {

  console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
    validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
    'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
    
  console.assert(
    validarNombre(23123) === "El campo nombre solo puede tener letras",
    "La funcion validarNombre no valido que el nombre sea solo letras"
  );    

  console.assert(
    validarCiudad("Santino") === "", "Validar nombre no funciono con un nombre valido"
  );

}


function probarValidarCiudad() {

  console.assert(
    validarCiudad('') === 'El campo ciudad no puede estar vacio',
    'Validar ciudad no valido que la ciudad no sea vacia',
  );

  console.assert(
    validarCiudad("1111111111111111111111111111111111111111111111111111111111111111111111111111") ===
    "El campo ciudad debe tener menos de 50 caracteres",
    "Validar ciudad no valido que la ciudad sea menor a 100 caracteres"
  );
  
  console.assert(
    validarCiudad(23123) === "El campo ciudad solo puede tener letras",
    "La funcion validarCiudad no valido que la ciudad sea solo letras"
  );

  console.assert(
    validarCiudad("Santino") === "", "Validar ciudad no funciono con una ciudad valida"
  );

}


function probarValidarDescripcionRegalo() {

  console.assert(
    validarDescripcionRegalo('') === 'El campo descripcion regalo no puede estar vacio',
    'Validar descripcion regalo no valido que la descripcion regalo no sea vacia',
  );

  console.assert(
    validarDescripcionRegalo("sdjdhasjdhakjsdhaskjhdjashdkjashdjksahdasddjsahdjkadsjdhsajkdhkjahdjkhsahdjashdkjhkjdhasjkdhaskjdhakjdhakjdhjhsdkdhaskj") ===
    "El campo descripcion regalo debe tener menos de 100 caracteres" ,
    "Validar descripcion regalo no valido que la descripcion regalo sea menor a 100 caracteres"
  );

  console.assert(
    validarDescripcionRegalo("Santino") === "",
    "Validar descripcion regalo no funciono con una descripcion regalo valida"
  );

}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
