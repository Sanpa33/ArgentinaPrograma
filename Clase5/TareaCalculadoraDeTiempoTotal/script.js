//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#agregar-video").onclick = function() {
    const nuevoVideo = document.createElement("div");
    nuevoVideo.classList.add("video");
    nuevoVideo.innerHTML = `
        <label for="horas">Horas:</label>
        <input type="number" class="horas" name="horas" min="0">
        <label for="minutos">Minutos:</label>
        <input type="number" class="minutos" name="minutos" min="0" max="59">
        <label for="segundos">Segundos:</label>
        <input type="number" class="segundos" name="segundos" min="0" max="59">
    `;
    document.querySelector("#formulario-tiempo").insertBefore(nuevoVideo, document.querySelector("#agregar-video"));
};

document.querySelector("#calcular-tiempo-total").onclick = function() {
    let tiempoTotalSegundos = 0;

    document.querySelectorAll(".video").forEach(video => {
        const horas = Number(video.querySelector(".horas").value);
        const minutos = Number(video.querySelector(".minutos").value);
        const segundos = Number(video.querySelector(".segundos").value);

        tiempoTotalSegundos += (horas * 3600) + (minutos * 60) + segundos;
    });

    const horasTotales = Math.floor(tiempoTotalSegundos / 3600);
    const minutosTotales = Math.floor((tiempoTotalSegundos % 3600) / 60);
    const segundosTotales = tiempoTotalSegundos % 60;

    document.querySelector("#tiempo-total").innerText = `Tiempo total: ${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos`;
};