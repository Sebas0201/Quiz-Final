const apiUrl =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=H5AZuxGblBGuQjhSCRdAaxCIhGxmsEzE";

var libros = [];

async function cargarTitulos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    libros = data.results.books;

    const droplist = document.getElementById("bookCriteria");

    libros.forEach((libro) => {
      const option = document.createElement("option");
      option.value = libro.title;
      option.textContent = libro.title;
      droplist.appendChild(option);
    });
  } catch (error) {
    console.error("Error al cargar los títulos:", error);
  }
}

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
document.addEventListener("DOMContentLoaded", cargarTitulos);
