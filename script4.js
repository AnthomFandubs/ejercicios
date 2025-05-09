let contador = 0;
let duracion = 0;
let tiempo = 0;
let intervalo;
let cuentaActiva = false;

const botonClic = document.getElementById("botonClic");
const contadorTexto = document.getElementById("contador");
const tiempoTexto = document.getElementById("tiempoRestante");
const mensajeFinal = document.getElementById("mensajeFinal");

function setDuracion(segundos) {
  duracion = segundos;
  botonClic.disabled = false;
  botonClic.textContent = "¡Comenzar!";
  mensajeFinal.textContent = "";
  tiempoTexto.textContent = "";
  contadorTexto.textContent = "0 clics";
  contador = 0;
  cuentaActiva = false;
}

function iniciarReto() {
  if (duracion <= 0 || cuentaActiva) return;

  cuentaActiva = true;
  botonClic.textContent = "Haz clic";
  mensajeFinal.textContent = "";
  contador = 0;
  contadorTexto.textContent = "0 clics";

  tiempo = duracion;
  tiempoTexto.textContent = `Tiempo restante: ${tiempo}s`;

  botonClic.onclick = () => {
    contador++;
    contadorTexto.textContent = `${contador} clic${contador === 1 ? '' : 's'}`;
  };

  intervalo = setInterval(() => {
    tiempo--;
    tiempoTexto.textContent = `Tiempo restante: ${tiempo}s`;

    if (tiempo <= 0) {
      clearInterval(intervalo);
      botonClic.disabled = true;
      botonClic.onclick = iniciarReto;
      tiempoTexto.textContent = "";
      mensajeFinal.textContent = `¡Hiciste ${contador} clic${contador === 1 ? '' : 's'} en ${duracion} segundo${duracion === 1 ? '' : 's'}!`;
      cuentaActiva = false;
    }
  }, 1000);
}
