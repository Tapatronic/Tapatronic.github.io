document.body.addEventListener('click', function(event) {
    var bananaImg = document.createElement('img');
    bananaImg.src = 'ruta/a/tu/imagen/de/platano.png'; // Cambia esto a la ruta de tu imagen de plátano
    bananaImg.style.left = event.clientX + 'px';
    bananaImg.style.top = event.clientY + 'px';
    bananaImg.classList.add('banana');
    document.body.appendChild(bananaImg);

    // Esto hace que el plátano caiga
    setTimeout(function() {
        bananaImg.style.transform = 'translateY(' + window.innerHeight + 'px)';
    }, 0);

    // Esto elimina el plátano de la página una vez que ha caído
    bananaImg.addEventListener('transitionend', function() {
        document.body.removeChild(bananaImg);
    });
});
