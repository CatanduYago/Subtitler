"use strict";

let tabId;

// Escuchamos los mensajes desde la extensión para iniciar o detener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      tabId = tabs[0].id;
      // Ejecutar el script solo en la pestaña activa cuando el usuario haga clic
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["content.js"]
      }, () => {
        // Iniciar captura de audio después de inyectar el script
        chrome.tabs.sendMessage(tabId, { action: "startCapture" });
      });
    });
  } else if (message.action === "stop") {
    // Enviamos un mensaje para detener la transcripción en la pestaña activa
    chrome.tabs.sendMessage(tabId, { action: "stopCapture" });
  }
});