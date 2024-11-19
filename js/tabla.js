function multiplicar() {
    const num1 = parseFloat(prompt("Ingresa el primer número para multiplicar:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número para multiplicar:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de multiplicar ${num1} y ${num2} es ${num1 * num2}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}

function elevar() {
    const num = parseFloat(prompt("Ingresa un número para elevar al cuadrado:"));

    if (!isNaN(num)) {
        alert(`El resultado de elevar ${num} al cuadrado es ${num ** 2}`);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

function restar() {
    const num1 = parseFloat(prompt("Ingresa el primer número para restar:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número para restar:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de restar ${num1} menos ${num2} es ${num1 - num2}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}
