//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

document.querySelector("#calcular").onclick = function (){

    let nodoDeNumeros = document.querySelectorAll("li");

    listaDeNumeros = transformarALista(nodoDeNumeros);

    promedio = calcularPromedio(listaDeNumeros);
    menor = calcularNumeroMasPequeño(listaDeNumeros);
    mayor = calcularNumeroMasGrande(listaDeNumeros);
    masRepetido = elementoMasRepetido(listaDeNumeros)

    document.querySelector("#promedio").innerText = `El promedio es ${promedio}\n`;
    document.querySelector("#numero-mas-pequeno").innerText = `El número más pequeño es ${menor}\n`;
    document.querySelector("#numero-mas-grande").innerText = `El número más grande es ${mayor}\n`;
    document.querySelector("#numero-mas-frecuente").innerText = `El número más frecuente es ${masRepetido}`;

    return false

}



function transformarALista (nodo){

    let lista = [];

    for (let i = 0; i < nodo.length; i++){
        lista.push(Number(nodo[i].innerText));
    }
    

    return lista

}

function calcularPromedio (lista){

    let suma = 0 ;

    for(let i = 0 ; i < lista.length; i++) {

        suma += lista[i];

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

function elementoMasRepetido(lista){

    let contador = 0;
    let maximaCantidadDeApariciones = 0
    let masRepetido = 0;

    for (let i = 0; i < lista.length; i++){

        for (let j = 0; j < lista.length; j++){

            if (lista[i] === lista[j]){
                contador++;
            }

        }

        if (contador > maximaCantidadDeApariciones){
            maximaCantidadDeApariciones = contador
            masRepetido = lista[i];
        }

        contador = 0;
    }

    return masRepetido;
}

