setInterval(function() {
    const horaElemento = document.querySelector('#horaActual');
    const fechaActual = new Date();
    let horas = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    let ampm = horas >= 12 ? "pm" : "am"
    
    horas = horas.padStart(2, "0")
    minutos = minutos.padStart(2, "0")
    segundos = segundos.padStart(2, "0")

    horas = horas % 12 === 0 ? 12 : horas % 12;

    horaElemento.innerHTML = `Hora actual: ${horas}:${minutos}:${segundos} ${ampm}`;


}, 1000); 