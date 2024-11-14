function mostrarDatos() {
  const criterioSeleccionado = document.getElementById("bookCriteria").value;
  const libroSeleccionado = libros.find(
    (libro) => libro.title === criterioSeleccionado
  );

  if (libroSeleccionado) {
    const tabla = document
      .getElementById("bookTable")
      .getElementsByTagName("tbody")[0];
    tabla.innerHTML = "";

    const fila = tabla.insertRow();
    fila.insertCell().textContent = libroSeleccionado.publisher;
    fila.insertCell().textContent = libroSeleccionado.description;
    fila.insertCell().textContent = libroSeleccionado.price;
    fila.insertCell().textContent = libroSeleccionado.title;
    fila.insertCell().textContent = libroSeleccionado.author;
    fila.insertCell().textContent = libroSeleccionado.contributor;
    fila.insertCell().textContent = libroSeleccionado.contributor_note;

    const cell = fila.insertCell();
    const img = document.createElement("img");
    img.src = libroSeleccionado.book_image;
    img.alt = libroSeleccionado.title;
    img.width = 100;
    cell.appendChild(img);
  }
}
