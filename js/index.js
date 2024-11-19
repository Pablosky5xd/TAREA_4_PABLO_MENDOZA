// Muestra un mensaje de bienvenida y solicita el nombre del usuario
window.onload = function () {
    alert("¡Bienvenido a nuestra página principal!");
    const userName = prompt("dime, ¿Cómo te llamas?");

    if (userName) {
        document.getElementById("mensaje-bienvenida").innerText = `Como estas, ${userName}?, gracias por visitarnos!.`;
    }
};
