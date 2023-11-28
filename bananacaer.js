document.body.addEventListener('click', function(event) {
    var bananaImg = document.createElement('img');
    bananaImg.src = 'bananapixelart.png';
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
