

let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const mensaje = document.getElementById("mensaje");
  const textoTarea = input.value.trim();

  if (textoTarea === "") {
    mensaje.textContent = "⚠️ No puedes agregar una tarea vacía.";
    return;
  }

  mensaje.textContent = ""; // Limpiar mensaje

  // Crear objeto tarea con ID único y fecha
  const nuevaTarea = {
    id: Math.floor(Math.random() * 1000000),
    texto: textoTarea,
    fecha: new Date().toLocaleString()
  };

  tareas.push(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

// Función para eliminar una tarea por su ID
function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  mostrarTareas();
}

// Función para mostrar todas las tareas
function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach(tarea => {
    const li = document.createElement("li");

    // Contenedor del texto
    const spanTexto = document.createElement("span");
    spanTexto.textContent = `${tarea.texto} (${tarea.fecha})`;

    // Botón de eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.classList.add("boton-eliminar");
    btnEliminar.addEventListener("click", (e) => {
      e.stopPropagation(); 
      eliminarTarea(tarea.id);
    });

    // Añadir elementos a la lista
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
  });
}