"use strict";

// Verificar si el contenedor ya existe
if (!document.getElementById("live-caption-container")) {
  const container = document.createElement("div");
  container.id = "live-caption-container";
  container.style.position = "fixed";
  container.style.bottom = "0";
  container.style.width = "100%";
  container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  container.style.color = "white";
  container.style.padding = "10px";
  container.style.fontSize = "16px";
  container.style.zIndex = "10000";
  container.style.textAlign = "center";
  container.style.fontFamily = "Arial, sans-serif";
  document.body.appendChild(container);
}

// Inyectar el script de reconocimiento de voz en la página
const recognitionScript = document.createElement("script");
recognitionScript.src = chrome.runtime.getURL("js/live-captioning.js");
recognitionScript.onload = () => recognitionScript.remove(); // Eliminar después de cargar
document.head.appendChild(recognitionScript);

// Escuchar mensajes desde el background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "startCapture" || message.action === "stopCapture") {
    // Reenviar la acción al entorno de la página usando postMessage
    window.postMessage({ action: message.action }, "*");
  }
});
