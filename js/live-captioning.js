"use strict";

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES'; // Cambiar el idioma según sea necesario
  recognition.continuous = true; // Habilitar resultados continuos
  recognition.interimResults = true; // Mostrar resultados parciales

  const subtitleContainer = document.getElementById("live-caption-container");

  // Manejar eventos personalizados
  window.addEventListener("speechRecognitionControl", (event) => {
    if (event.detail === "startCapture") {
      try {
        // Inicia el reconocimiento de voz
        recognition.start();
        subtitleContainer.textContent = "Capturando audio...";
      } catch (error) {
        console.error("Error al iniciar SpeechRecognition:", error);
      }
    } else if (event.detail === "stopCapture") {
      // Detiene el reconocimiento de voz
      recognition.stop();
      subtitleContainer.textContent = "";
    }
  });

  // Manejar resultados del reconocimiento
  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    subtitleContainer.textContent = transcript; // Mostrar el texto transcrito
  };

  // Manejar errores del reconocimiento
  recognition.onerror = (error) => {
    console.error("SpeechRecognition error:", error);
    subtitleContainer.textContent = "Error al capturar subtítulos.";
  };

  // Detener automáticamente al finalizar
  recognition.onend = () => {
    console.log("SpeechRecognition detenido.");
    subtitleContainer.textContent = "Detenido.";
  };
} else {
  console.error("webkitSpeechRecognition no está disponible en este navegador.");
  alert("El navegador no soporta webkitSpeechRecognition.");
}
