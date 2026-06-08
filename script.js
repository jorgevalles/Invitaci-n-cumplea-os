// 1. Ponemos la fecha del cumpleaños (12 de Junio de 2026)
const fechaTarget = new Date('June 12, 2026 00:00:00').getTime();

// 2. El reloj que se actualiza cada segundo
const countdown = setInterval(() => {

    const ahora = new Date().getTime();
    const distancia = fechaTarget - ahora;

    // 3. Cálculos del tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // 4. Aquí buscamos tus etiquetas <h2> con la clase '.c-number'
    const elementosNumeros = document.querySelectorAll('.c-number');

    // 5. Inyectamos los números en tu HTML de forma ordenada
    if (elementosNumeros.length >= 4) {
        elementosNumeros[0].innerText = String(dias).padStart(2, '0');
        elementosNumeros[1].innerText = String(horas).padStart(2, '0');
        elementosNumeros[2].innerText = String(minutos).padStart(2, '0');
        elementosNumeros[3].innerText = String(segundos).padStart(2, '0');
    }

    // Si el tiempo se agota, se queda en 00
    if (distancia < 0) {
        clearInterval(countdown);
        if (elementosNumeros.length >= 4) {
            elementosNumeros[0].innerText = "00";
            elementosNumeros[1].innerText = "00";
            elementosNumeros[2].innerText = "00";
            elementosNumeros[3].innerText = "00";
        }
    }

}, 1000);