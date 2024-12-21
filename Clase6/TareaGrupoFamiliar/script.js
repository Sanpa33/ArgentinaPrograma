/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#calcular-cantidad-familiares').onclick = function(){

crearFamiliar(document.querySelector('#cantidad-familiares').value);
    

    return false;
}


document.querySelector('#calcular-grupo-familiar').onclick = function() {

    borrarResultado();

    const edades = obtenerValoresFormulario();

    const mayor = calcularNumeroMasGrande(edades);

    const menor = calcularNumeroMasPequeño(edades);

    const promedio = calcularPromedio(edades);

    const $resultado = document.querySelector('#resultado');

    const $mayor = document.createElement('p');
    $mayor.textContent = 'La edad mayor es: ' + mayor;
    $resultado.appendChild($mayor);

    const $menor = document.createElement('p');
    $menor.textContent = 'La edad menor es: ' + menor;
    $resultado.appendChild($menor);

    const $promedio = document.createElement('p');
    $promedio.textContent = 'El promedio de edades es: ' + promedio;
    $resultado.appendChild($promedio);

    const $botonEmpezarDeNuevo = document.getElementById('resetear-formulario');
    $botonEmpezarDeNuevo.className = "";
    
    return false;
}


function crearFamiliar(numeroDeFamiliares){

    const form = document.getElementById('grupo-familiar');

    for (i = 0; i < numeroDeFamiliares; i++){
        const $label = document.createElement('label');
        $label.textContent = 'Edad del familiar ' + (i + 1);
        form.appendChild($label);

        const $input = document.createElement('input');
        $input.id = 'edad-familiar-' + (i + 1);
        $input.type = 'number';
        form.appendChild($input);

        const $br = document.createElement('br');
        form.appendChild($br);

    }

    mostrarBotonCalcular();

}


function obtenerValoresFormulario() {
    const form = document.getElementById('grupo-familiar');
    const inputs = form.getElementsByTagName('input');
    const valores = [];

    for (let i = 0; i < inputs.length; i++) {
        valores.push(inputs[i].value);
    }

    return valores;
}


function mostrarBotonCalcular() {
    const $botonCalcular = document.getElementById('calcular-grupo-familiar');
    $botonCalcular.classList.remove('oculto');  
}



function calcularPromedio (lista){

    let suma = 0 ;

    for(let i = 0 ; i < lista.length; i++) {

        suma += Number(lista[i]);

    }

    return suma / lista.length;
    
}

function calcularNumeroMasPequeño (lista){

    let menor = lista[0];

    for (i = 0 ; i < lista.length; i++){

        if (lista[i] < menor){
            menor = lista[i];
        }
    }

    return menor

}

function calcularNumeroMasGrande (lista){

    let mayor = lista[0];

    for (i = 0 ; i < lista.length; i++){

        if (lista[i] > mayor){
            mayor = lista[i];
        }
    }

    return mayor

}

borrarResultado = function(){

    const $resultado = document.querySelector('#resultado');
    $resultado.textContent = '';
}

document.querySelector('#resetear-formulario').onclick = function() {

    const form = document.getElementById('grupo-familiar');
    form.textContent = '';

    const $resultado = document.querySelector('#resultado');
    $resultado.textContent = '';

    const $botonCalcular = document.getElementById('calcular-grupo-familiar');
    $botonCalcular.className = "";
    $botonCalcular.classList.add('oculto');

    const $botonEmpezarDeNuevo = document.getElementById('resetear-formulario');
    $botonEmpezarDeNuevo.className = "oculto";

    return false;

}