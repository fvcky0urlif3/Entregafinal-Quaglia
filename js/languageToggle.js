//idioma español e inglés
function cambiarIdioma() {
    const idiomaToggle = document.getElementById("language-toggle");
    const idiomaActual = idiomaToggle.innerText;

    if (idiomaActual === "EN") {
        idiomaToggle.innerText = "ES";
        // Cambiar el texto del DOM según el idioma
        document.getElementById("home-text").innerText = "Inicio";
        document.getElementById("crew-text").innerText = "La crew";
        document.getElementById("members-text").innerText = "Integrantes";
        document.getElementById("jam-text").innerText = "Sweet street jam";
        document.getElementById("register-text").innerText = "Regístrate";
        // Cambiar texto del index al español
        document.querySelector("h1").innerText = "Sweet Leaf Crew";
        document.querySelector(".texto2").innerText = "¿Qué es la Sweet?";
        document.querySelector(".leyenda1").innerText = "La Sweet Leaf Crew es unión, amistad, pasión y progreso... resumidamente es un grupo de amigos siendo felices.";
        document.querySelector(".titulo2").innerText = "Que son las Jams?";
        document.querySelector(".texto1").innerText = "Les dejamos un pequeño video sobre la jam que se realizo en fines de 2019";
        document.querySelector(".texto1-2").innerText = "La gente tanto riders como ciudadanos, incentivaban entre si, a cada uno de los chicos que estaban andando!";
        document.querySelector(".textofotofinal").innerText = "Al final de la jam siempre sacamos una foto con TODOS los riders que vinieron";
        localStorage.setItem("idioma", "ingles");
    } else {
        idiomaToggle.innerText = "EN";
        // Cambiar el texto de cada elemento del DOM según el idioma
        document.getElementById("home-text").innerText = "Home";
        document.getElementById("crew-text").innerText = "The crew";
        document.getElementById("members-text").innerText = "Members";
        document.getElementById("jam-text").innerText = "Sweet street jam";
        document.getElementById("register-text").innerText = "Sign IN";
        // Cambiar texto a inglés
        document.querySelector("h1").innerText = "Sweet Leaf Crew";
        document.querySelector(".texto2").innerText = "What is the Sweet?";
        document.querySelector(".leyenda1").innerText = "The Sweet Leaf Crew is union, friendship, passion, and progress... in short, it's a group of friends being happy.";
        document.querySelector(".titulo2").innerText = "What are the Jams?";
        document.querySelector(".texto1").innerText = "Here's a short video about the jam that took place in late 2019";
        document.querySelector(".texto1-2").innerText = "Both riders and citizens encouraged each other, cheering on every kid who was riding!";
        document.querySelector(".textofotofinal").innerText = "At the end of the jam, we always take a photo with ALL the riders who came";
        localStorage.setItem("idioma", "espanol");
    }
}

// Event listeners
document.getElementById("dark-mode-toggle").addEventListener("click", temaOscuro);
document.getElementById("language-toggle").addEventListener("click", cambiarIdioma);

// Verificación del estado de tema e idioma almacenado en el localStorage
document.addEventListener("DOMContentLoaded", function() {
    const temaAlmacenado = localStorage.getItem("tema");
    if (temaAlmacenado === "oscuro") {
        temaOscuro();
    }

    const idiomaAlmacenado = localStorage.getItem("idioma");
    if (idiomaAlmacenado === "ingles") {
        cambiarIdioma();
    }
});

// Cargar el archivo de configuración JSON
fetch('configuracion.json')
  .then(response => response.json())
  .then(configuracion => {
    // Aplicar la configuración de idioma y tema
    if (configuracion) {
        // Aplicar la configuración del idioma
        if (configuracion.idioma === "ingles") {
            cambiarIdioma(); // Llama a la función para cambiar el idioma
        }

        // Aplicar la configuración del tema
        if (configuracion.tema === "oscuro") {
            temaOscuro(); // Llama a la función para activar el modo oscuro
        }
    }
  })
  .catch(error => console.error('Error al cargar la configuración:', error));