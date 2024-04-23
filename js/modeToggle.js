
// JavaScript para alternar el modo oscuro
function temaOscuro() {
    const cuerpo = document.body;
    cuerpo.classList.toggle("dark-mode");

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const dlIcon = document.getElementById("dl-icon");

    if (cuerpo.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        dlIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
        localStorage.setItem("tema", "oscuro");
    } else {
        darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        dlIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
        localStorage.setItem("tema", "claro");
    }
}

// Event listener
document.getElementById("dark-mode-toggle").addEventListener("click", temaOscuro);