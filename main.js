 var horaConexion = new Date();

        // Muestra la hora de conexión en el footer
        document.getElementById('horaConexion').textContent = 'Hora de conexión: ' + horaConexion.toLocaleTimeString();

        // Actualiza el tiempo de conexión cada segundo
        setInterval(function() {
            var ahora = new Date();
            var tiempoConexion = Math.floor((ahora - horaConexion) / 1000);
            document.getElementById('tiempoConexion').textContent = 'Tiempo de conexión: ' + tiempoConexion + ' segundos';
        }, 1000);

        function buscarProducto() {
  // Obtén el valor del input de búsqueda
  var input = document.querySelector('.search-bar input');
  var filter = input.value.toUpperCase();

  // Obtén todos los productos
  var products = document.querySelectorAll('.product');

  // Recorre todos los productos y oculta aquellos que no coinciden con la búsqueda
  for (var i = 0; i < products.length; i++) {
    var titleElement = products[i].querySelector('.product-title a');
    if (titleElement) {
      var title = titleElement.textContent;
      if (title.toUpperCase().indexOf(filter) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
}
