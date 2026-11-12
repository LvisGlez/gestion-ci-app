// Agrega una tarea pendiente a la lista validando el titulo
function agregar(lista, titulo) {
  if (typeof titulo !== 'string' || titulo.trim() === '') {
    throw new Error('El titulo de la tarea es obligatorio');
  }
  const id = lista.reduce((max, tarea) => Math.max(max, tarea.id), 0) + 1;
  return [...lista, { id, titulo: titulo.trim(), completada: false }];
}

// Marca como completada la tarea con el id indicado
function completar(lista, id) {
  if (!lista.some((tarea) => tarea.id === id)) {
    throw new Error(`No existe una tarea con id ${id}`);
  }
  return lista.map((tarea) => (tarea.id === id ? { ...tarea, completada: true } : tarea));
}

// Devuelve las tareas que no estan completadas
function pendientes(lista) {
  return lista.filter((tarea) => !tarea.completada);
}

module.exports = { agregar, completar, pendientes };
