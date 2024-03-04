// Seleccionar el elemento con la clase "pantalla"
const pantalla = document.querySelector(".pantalla");

// Seleccionar todos los elementos con la clase "btn"
const botones = document.querySelectorAll(".btn");

// Agregar un evento de clic a cada botón
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtener el contenido del botón presionado
        const botonApretado = boton.textContent;

        // Manejar el botón "C" (limpiar)
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Manejar el botón "←" (borrar último caracter)
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Manejar el botón "=" (realizar cálculos)
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Manejar otros botones numéricos y operadores
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
