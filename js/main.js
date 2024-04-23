// Función para alternar entre el modo oscuro y claro
function toggleDarkMode() {
    const body = document.body;
    const dlIcon = document.getElementById('dl-icon');

    // Cambiar entre el tema oscuro y claro
    if (body.dataset.bsTheme === 'dark') {
        body.dataset.bsTheme = 'light';
        dlIcon.classList.remove('bi-moon-fill');
        dlIcon.classList.add('bi-sun-fill');
    } else {
        body.dataset.bsTheme = 'dark';
        dlIcon.classList.remove('bi-sun-fill');
        dlIcon.classList.add('bi-moon-fill');
    }
}

// Agregar evento de clic al botón para alternar el modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);