document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const usuariosRegistrados = []; // Lista de almacenamiento de nombres de usuario registrados

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario de serie

        // valores del formulario
        const nombre = document.getElementById('Nombre').value;
        const apellido = document.getElementById('Apellido').value;
        const mensaje = document.getElementById('Mensaje').value;

        // Verificar datos ingresados
        if (!nombre || !apellido) {
            // Mostrar la alerta si falta el nombre o el apellido
            alert('Por favor, ingresa tu nombre y apellido.');
            return; // no ejecutar si falta algun dato
        }

        // si el nombre ya esta en el sistema, entonces...
        if (usuariosRegistrados.includes(nombre)) {
            alert('Este usuario ya existe. Por favor, prueba con otro nombre.');
            return;
        }

        // Registrar nuevo usuario
        usuariosRegistrados.push(nombre);

        // Crear un objeto (usuario) con los datos del formulario
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            mensaje: mensaje
        };

        // Alerta "te pudiste registrar"
        alert(`¡Perfecto ${nombre}! Te has registrado exitosamente en nuestra web.`);

        // aparece el usuario en la consola
        console.log('Usuario registrado:', usuario);

        // Recetear datos del formulario
        form.reset();
    });
});
