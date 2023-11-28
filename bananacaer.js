document.body.addEventListener('click', function(event) {
    var bananaImg = document.createElement('img');
    bananaImg.src = 'banana.png';
    bananaImg.style.left = event.clientX + 'px';
    bananaImg.style.top = event.clientY + 'px';
    bananaImg.classList.add('banana');
    document.body.appendChild(bananaImg);
    bananaImg.style.transition = 'transform 10s';
    // Esto hace que el plátano caiga
    setTimeout(function() {
        bananaImg.style.transform = 'translateY(' + window.innerHeight + 'px)';
    }, 0);

    // Esto elimina el plátano de la página una vez que ha caído
    bananaImg.addEventListener('transitionend', function() {
        document.body.removeChild(bananaImg);
    });
});
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
