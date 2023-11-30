        document.body.addEventListener('click', function(event) {
            var banana = document.getElementById('banana');
            banana.style.left = event.clientX + 'px';
            banana.style.top = event.clientY + 'px';
            setTimeout(function() {
                banana.style.transform = 'translateY(' + window.innerHeight + 'px)';
                banana.classList.remove('banana');
                banana.classList.add('banana1');
            }, 0);
        });
