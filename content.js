"use strict";

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = true;

  const subtitleContainer = document.createElement("div");
  subtitleContainer.id = "live-caption-container";
  subtitleContainer.style.position = "fixed";
  subtitleContainer.style.bottom = "0";
  subtitleContainer.style.width = "100%";
  subtitleContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  subtitleContainer.style.color = "white";
  subtitleContainer.style.padding = "10px";
  subtitleContainer.style.fontSize = "16px";
  subtitleContainer.style.zIndex = "10000";
  document.body.appendChild(subtitleContainer);

  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    subtitleContainer.textContent = transcript;
  };

  recognition.onerror = (event) => {
    console.error("Error de reconocimiento:", event.error);
    subtitleContainer.textContent = "Error al procesar el audio.";
  };

  function startRecognition() {
    recognition.start();
  }

  startRecognition();
} else {
  console.error("La API webkitSpeechRecognition no está disponible en este navegador.");
}