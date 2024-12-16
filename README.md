```json
{
    "manifest_version": 3,
    "name": "Mi primera extension de chrome",  // Establece el nombre publico de la extension
    "version": "1.0",  // Establece la version de la extension
    "description": "Esta es una extension de prueba", // Esta es la descripcion publicxa de la extension
    "icons": {
        "128": "icon128.png" // Este es el icono para cuando se necesite mostrar la imagen de 128x128
    },
    "action":{
        "default_popup": "popup.html" // esto establece que al activvar la extension lo que se abra sea popup.html
    }
}

```