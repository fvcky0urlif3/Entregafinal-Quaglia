// Pestaña de "sweet street jam", sos un fiel seguidor?

const preguntas = [
    "¿En qué año fue la primer JAM que realizamos?",
    "¿Has asistido a todas las demás JAMS?",
    "¿Conoces a los fundadores de la Sweet leaf Crew?"
  ];
  const respuestas = ["2019", "Si", "Facu y Cris"];
  
 // se muestra el formato de preguntas y se procesan las respuestas
function eresFielSeguidor() {
    let respuestasCorrectas = 0;
  

    for (let i = 0; i < preguntas.length; i++) {

      let respuesta = prompt(preguntas[i]);
      if (i === 2) {
        respuesta = respuesta.toLowerCase().trim();
      }
  
      if (respuesta === respuestas[i].toLowerCase()) {
        alert("Respuesta correcta!");
        respuestasCorrectas++;
      } else {
        alert("Respuesta incorrecta. intentá de nuevo o segui navegando.");
      }
    }
  
    // Si todas las respuestas son correctas...
    if (respuestasCorrectas === preguntas.length) {
      alert("¡Sos un fiel seguidor, te ganaste unos stikers en la proxima JAM!");
    } 
    //sino...
    else {
      alert("Todavía te falta para estar dulce.");
    }
  }
  
  // LLamamos el cuestionario para que arranque :D
  eresFielSeguidor();