const apiUrl =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=H5AZuxGblBGuQjhSCRdAaxCIhGxmsEzE";

let libros = [];

async function cargarTitulos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    libros = data.results.books;

    const droplist = document.getElementById("bookCriteria");

    droplist.innerHTML = '<option value="">Selecciona un título</option>';

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

document.addEventListener("DOMContentLoaded", cargarTitulos);
