document.body.addEventListener('click', function(event) {
    var bananaImg = document.createElement('img');
    bananaImg.src = 'banana.png';
    bananaImg.style.left = event.clientX + 'px';
    bananaImg.style.top = event.clientY + 'px';
    bananaImg.classList.add('banana');
    document.body.appendChild(bananaImg);
    bananaImg.style.transition = 'transform 10s';
    setTimeout(function() {
        bananaImg.style.transform = 'rotate(360deg) translateY(' + window.innerHeight + 'px)';
    }, 0);
    bananaImg.addEventListener('transitionend', function() {
        document.body.removeChild(bananaImg);
    });
});
