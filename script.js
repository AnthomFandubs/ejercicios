function convertir() {
    const texto = document.getElementById("texto").value.trim();
    const resultado = document.getElementById("resultado");

    if (texto === "") {
        resultado.textContent = "Error, no se ha ingresado texto";
        resultado.style.color = "red";
        return;
    }

    const tieneLetras = /[a-zA-Z]/.test(texto);
    const soloNumerosOSimbolos = /^[^a-zA-Z]+$/.test(texto);
    const estaEnMayus = texto === texto.toUpperCase();

    if (soloNumerosOSimbolos) {
        resultado.textContent = "Error, letra no identificada";
        resultado.style.color = "red";
    } else if (estaEnMayus) {
        resultado.textContent = "Error, letra ya mayusculizada";
        resultado.style.color = "red";
    } else {
        const textoMayus = texto.toUpperCase();
        resultado.textContent = textoMayus;
        resultado.style.color = "#333";
    }
}
