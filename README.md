# To-Do List con JavaScript

Este proyecto consiste en una aplicación de lista de tareas (To-Do List) desarrollada con JavaScript puro. Fue creado como parte de la **evaluación de portafolio**, integrando los conocimientos adquiridos en estructuras de datos, control de flujo, modularización del código y uso de objetos preconstruidos del lenguaje.

## Objetivo del Proyecto

Crear una aplicación web interactiva donde el usuario pueda agregar, visualizar y eliminar tareas, aplicando buenas prácticas de desarrollo con JavaScript. El proyecto demuestra dominio en lógica de programación y manejo dinámico del DOM.

---

## ¿Cómo ejecutar la aplicación?

1. Clona este repositorio o descarga el proyecto.  
2. Abre el archivo `index.html` en cualquier navegador moderno.  
3. Interactúa con la aplicación desde la interfaz: agrega tareas, elimínalas y observa cómo se gestionan dinámicamente.  

---

## Tecnologías utilizadas

- **HTML5**: Estructura básica del documento.  
- **CSS3**: Estilos básicos para presentación.  
- **JavaScript (ES6+)**: Lógica de la aplicación, manejo del DOM, estructuras de control, modularización de funciones.  

---

## Funcionalidades implementadas

### Agregar tareas

- El usuario puede escribir una tarea y agregarla con un botón.  
- Si el campo está vacío, se muestra una advertencia.  
- Se asigna un ID único a cada tarea usando `Math.random()`.  

### Mostrar tareas

- Las tareas se almacenan en un **arreglo**.  
- Se recorren con `forEach` y se renderizan en el DOM.  
- Cada tarea muestra la fecha de creación (con `new Date()`).  

### Eliminar tareas

- Al hacer clic en una tarea, esta se elimina de la lista.  
- El arreglo se actualiza y la vista se vuelve a renderizar.  

---

## Estructura del Código

El código está modularizado en funciones específicas:

- `agregarTarea()`: Valida el input y añade una nueva tarea al arreglo.  
- `eliminarTarea(id)`: Filtra el arreglo para eliminar la tarea seleccionada.  
- `mostrarTareas()`: Actualiza el DOM con la lista actual de tareas.  

---

## Buenas prácticas aplicadas

- Uso de funciones puras para modularizar tareas.  
- Manejo adecuado del DOM.  
- Separación lógica entre estructura (HTML), estilo (CSS) y comportamiento (JS).  
- Validación de entradas del usuario.  
- Uso de objetos nativos (`Date`, `Math`) para resolver requerimientos prácticos.  

---

## Aprendizajes

Este proyecto permitió aplicar conceptos clave de JavaScript de forma práctica, reforzando habilidades como:

- Manipulación de arreglos  
- Interacción con el DOM  
- Validación y control de flujo  
- Modularización del código  
- Uso de objetos preconstruidos  

---

## Autor

- Nombre: Hector Ureta



# Preguntas

## Introducción a JavaScript en el Desarrollo Web

## ¿Qué es JavaScript y cuál es su rol en el desarrollo de aplicaciones web?

JavaScript es un lenguaje de programación interpretado, orientado a objetos y centrado en eventos, que se ejecuta directamente en los navegadores web. Forma parte del conjunto de tecnologías fundamentales del desarrollo web junto con HTML (estructura) y CSS (estilos).
El rol principal de JavaScript es dotar de interactividad y dinamismo a las páginas web, permitiendo responder a acciones del usuario sin necesidad de recargar la página.


## Ventajas de usar JavaScript en el navegador

Interactividad inmediata: Permite responder en tiempo real a acciones del usuario (clics, teclas, movimientos del mouse, etc.).

Actualización dinámica de contenido: Puedes modificar el contenido HTML o los estilos CSS sin recargar la página.

Validaciones en el cliente: Puedes validar formularios antes de enviarlos al servidor, reduciendo errores y mejorando la experiencia.

Amplia compatibilidad: Todos los navegadores modernos lo soportan sin necesidad de instalación adicional.

Ecosistema amplio: Existe una gran cantidad de librerías y frameworks como React, Vue, Angular que aceleran el desarrollo.

Integración con APIs: Permite acceder a datos de servidores remotos y mostrar contenido dinámico mediante AJAX o fetch.


## Funcionalidades posibles gracias a JavaScript

Validación en tiempo real de formularios  
Ej.: Mostrar mensajes de error si un campo está vacío o tiene un formato incorrecto.

Listas dinámicas y autocompletado  
Ej.: Sugerencias de búsqueda que aparecen mientras el usuario escribe.

Interacción con el DOM  
Ej.: Ocultar, mostrar o modificar elementos de la página al hacer clic en un botón.

Animaciones y transiciones interactivas  
Ej.: Efectos visuales al pasar el mouse o desplazarse por la página.

Carga de datos desde un servidor  
Ej.: Cargar productos en una tienda online sin refrescar la página.

Notificaciones y alertas personalizadas  
Ej.: Mensajes emergentes que informan al usuario sobre acciones realizadas.