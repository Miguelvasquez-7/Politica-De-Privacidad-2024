document.getElementById("aceptar-privacidad").addEventListener("click", function() {
    document.getElementById("overlay-privacidad").style.display = "none";
    document.getElementById("contenido").style.display = "block";
});

document.getElementById("rechazar-privacidad").addEventListener("click", function() {
    window.location.href = "(link unavailable)"; // Redirigir a otra página
});
