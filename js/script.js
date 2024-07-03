document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Guardar los datos en LocalStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);

    // Mostrar un mensaje de confirmación
    alert('¡Datos guardados exitosamente!');

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});
