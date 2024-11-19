window.onload = function () {
    // Mensaje de bienvenida
    alert("¡Bienvenido esta es la galería de imágenes!");

    // Solicitar la edad del usuario
    const age = prompt("dime, ¿Cuál es tu edad?");
    const ageMessage = document.getElementById("age-message");

    if (age) {
        if (parseInt(age) > 20) {
            ageMessage.innerText = "Tienes más de 20 años, ¡bienvenido a esta página especial!";
        } else {
            ageMessage.innerText = "Eres menor de 20 años, pero igualmente bienvenido.";
        }
    } else {
        ageMessage.innerText = "No proporcionaste tu edad, pero igual, ¡disfruta la galería!";
    }

    // Cambiar imágenes al pasar el mouse
    const images = document.querySelectorAll(".imagen-galeria");

    images.forEach((image) => {
        const originalSrc = image.src;
        const hoverSrc = originalSrc.replace(".jpg", "-hover.jpg");

        image.addEventListener("mouseover", () => {
            image.src = hoverSrc;
        });

        image.addEventListener("mouseout", () => {
            image.src = originalSrc;
        });
    });
};
