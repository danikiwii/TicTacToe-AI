// Seleccionar el contenedor del tablero
const tablero = document.querySelector('.tablero');



for (let position=0; position<9; position++) {
    const button = document.createElement('button');
    button.textContent = '';

    button.addEventListener('click', () => {
        alert(`Presionaste el botón en la posición: ${position}`);
        button.textContent = 'x';
    });
    // Se añade el botón creado al tablero
    tablero.appendChild(button);
}



