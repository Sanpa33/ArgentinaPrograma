/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let contador = 0


document.querySelector("#agregar-familiar").onclick = function() {

    const form = document.querySelector("#formulario-familia");

    contador++;

    form.appendChild(document.createElement("br"));

    const $label = document.createElement("label");
    $label.textContent = `Familiar ${contador}: `;
    form.appendChild($label);
    
    form.appendChild(document.createElement("br"));

    const $input = document.createElement("input");
    $input.type = "number";
    $input.className = "salario-anual";
    form.appendChild($input);

    return false

}


document.querySelector("#quitar-familiar").onclick = function() {

    const form = document.querySelector("#formulario-familia");

    if (contador > 0) {
        contador--;

        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
    }

    return false

}


document.querySelector("#calcular-salarios").onclick = function() {

    limpiarResultados();

    const salarios = obtenerValoresFormulario();

    const mayor = calcularNumeroMasGrande(salarios);
    const menor = calcularNumeroMasPequeño(salarios);
    const promedio = calcularPromedio(salarios);
    const promedioMensual = calcularPromedioMensual(salarios);

    const $resultado = document.querySelector("#resultado");

    const $mayor = document.createElement("p");
    $mayor.textContent = `El salario anual mayor es: ${mayor}`;
    $resultado.appendChild($mayor);

    const $menor = document.createElement("p");
    $menor.textContent = `El salario anual menor es: ${menor}`;
    $resultado.appendChild($menor);

    const $promedioSalarios = document.createElement("p");
    $promedioSalarios.textContent = `El salario anual promedio es: ${promedio}`;
    $resultado.appendChild($promedioSalarios);

    const $promedioMensualSalarios = document.createElement("p");
    $promedioMensualSalarios.textContent = `El salario mensual promedio es: ${promedioMensual}`;
    $resultado.appendChild($promedioMensualSalarios);

    return false
}


function obtenerValoresFormulario() {
    const form = document.getElementById('formulario-familia');
    const inputs = form.getElementsByTagName('input');
    const valores = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            continue;
        }
        valores.push(inputs[i].value);
    }

    return valores;
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

function calcularPromedioMensual (lista) {
    
    let promedio = calcularPromedio(lista);

    return promedio / 12
}

function limpiarResultados() {
    const $resultado = document.querySelector("#resultado");
    $resultado.innerHTML = "";
}