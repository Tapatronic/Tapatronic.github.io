// Guarda la hora a la que el usuario se conectó
let horaConexion = new Date();
// Muestra la hora de conexión en el footer
document.getElementById('horaConexion').textContent = 'Hora de conexión: ' + horaConexion.toLocaleTimeString();
// Actualiza el tiempo de conexión cada segundo
setInterval(() => {
    let ahora = new Date();
    let tiempoConexion = Math.floor((ahora - horaConexion) / 1000);
    document.getElementById('tiempoConexion').textContent = 'Tiempo de conexión: ' + tiempoConexion + ' segundos';
}, 1000);

let input = document.querySelector('.search-bar input');
let products = document.querySelectorAll('.product');

function buscarProducto() {
  let filter = input.value.toUpperCase();
  // Recorre todos los productos y oculta aquellos que no coinciden con la búsqueda
  for (let i = 0; i < products.length; i++) {
    let titleElement = products[i].querySelector('.product-title a');
    if (titleElement) {
      let title = titleElement.textContent;
      if (title.toUpperCase().indexOf(filter) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
}

document.querySelector('.search-bar form').addEventListener('submit', (event) => {
  event.preventDefault();
  buscarProducto();
});
