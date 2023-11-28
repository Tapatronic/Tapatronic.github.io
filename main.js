window.onload = function() {
    var horaConexion = new Date();

    // Muestra la hora de conexión en el footer
    document.getElementById('horaConexion').textContent = 'Hora de conexión: ' + horaConexion.toLocaleTimeString();

    // Actualiza el tiempo de conexión cada segundo
    setInterval(function() {
        var ahora = new Date();
        var tiempoConexion = Math.floor((ahora - horaConexion) / 1000);
        document.getElementById('tiempoConexion').textContent = 'Tiempo de conexión: ' + tiempoConexion + ' segundos';
    }, 1000);
});
