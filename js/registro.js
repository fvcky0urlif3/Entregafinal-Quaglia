document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const usuariosRegistrados = []; // Lista para almacenar los nombres de usuario registrados

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        const nombre = document.getElementById('Nombre').value;
        const apellido = document.getElementById('Apellido').value;
        const mensaje = document.getElementById('Mensaje').value;

        // Verificar si se ingresaron tanto el nombre como el apellido
        if (!nombre || !apellido) {
            // Mostrar la alerta si falta el nombre o el apellido
            alert('Por favor, ingresa tu nombre y apellido.');
            return; // Detener la ejecución si falta algún dato
        }

        // Verificar si el nombre ya está registrado
        if (usuariosRegistrados.includes(nombre)) {
            alert('Este usuario ya existe. Por favor, prueba con otro nombre.');
            return; // Detener la ejecución si el usuario ya existe
        }

        // Registrar el nombre de usuario
        usuariosRegistrados.push(nombre);

        // Crear un objeto de usuario con los datos del formulario
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            mensaje: mensaje
        };

        // Mostrar la alerta con el nombre del usuario registrado
        alert(`¡Perfecto ${nombre}! Te has registrado exitosamente en nuestra web.`);

        // Imprimir el usuario en la consola
        console.log('Usuario registrado:', usuario);

        // Limpiar el formulario después de enviar
        form.reset();
    });
});