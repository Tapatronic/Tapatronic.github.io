// Base de datos de palabras
const animales = ['perro', 'gato', 'elefante', 'león', 'tigre', 'oso', 'jirafa', 'mono', 'lobo', 'zorro', 'caballo', 'conejo', 'ardilla', 'koala', 'canguro', 'panda', 'rinocerante', 'hipopótamo', 'pingüino', 'foca', 'morsa', 'nutria', 'castor', 'ciervo', 'alce', 'búfalo', 'bisonte', 'antílope', 'gacela', 'chimpancé', 'orangután', 'gorila', 'bonobo', 'lemur', 'perezoso', 'armadillo', 'mapache', 'tejón', 'hiena', 'suricata', 'mangosta', 'fénec', 'camello', 'dromedario', 'llama', 'alpaca', 'vicuña', 'guanaco', 'narval', 'beluga', 'orca', 'delfín', 'ballena', 'mantarraya', 'tiburón', 'pulpo', 'calamar', 'medusa', 'estrella de mar', 'caballito de mar', 'langosta', 'cangrejo'];
const frutas = ['manzana', 'naranja', 'plátano', 'fresa', 'uva', 'kiwi', 'melón', 'sandía', 'piña', 'mango', 'papaya', 'coco', 'limón', 'pomelo', 'cereza', 'mora', 'frambuesa', 'arándano', 'higo', 'granada', 'aguacate', 'albaricoque', 'ciruela', 'melocotón', 'pera', 'mandarina', 'lima', 'guayaba', 'maracuyá', 'mangostán', 'durian', 'litchi', 'rambután'];

const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

// Creamos los botones para seleccionar el tema
const buttonContainer = document.createElement('div');
buttonContainer.style.position = 'absolute';
buttonContainer.style.top = '50%';
buttonContainer.style.left = '50%';
buttonContainer.style.transform = 'translate(-50%, -50%)';

const animalButton = document.createElement('button');
animalButton.innerText = 'Animales';
animalButton.onclick = () => selectTheme('animales');
animalButton.style.padding = '10px 20px';
animalButton.style.fontSize = '16px';
animalButton.style.borderRadius = '5px';
animalButton.style.backgroundColor = '#4CAF50';
animalButton.style.color = 'white';

const fruitButton = document.createElement('button');
fruitButton.innerText = 'Frutas';
fruitButton.onclick = () => selectTheme('frutas');
fruitButton.style.padding = '10px 20px';
fruitButton.style.fontSize = '16px';
fruitButton.style.borderRadius = '5px';
fruitButton.style.backgroundColor = '#008CBA';
fruitButton.style.color = 'white';

// Creamos el botón "No me molestes"
const noMolestarButton = document.createElement('button');
noMolestarButton.innerText = 'No me molestes';
noMolestarButton.onclick = () => {
    // Eliminamos los botones
    buttonContainer.style.display = 'none';
    // Permitimos dibujar
    temaSeleccionado = true;
};
noMolestarButton.style.padding = '10px 20px';
noMolestarButton.style.fontSize = '16px';
noMolestarButton.style.borderRadius = '5px';
noMolestarButton.style.backgroundColor = '#f44336';
noMolestarButton.style.color = 'white';


buttonContainer.appendChild(animalButton);
buttonContainer.appendChild(fruitButton);
buttonContainer.appendChild(noMolestarButton);
document.body.appendChild(buttonContainer);

// Creamos un elemento para mostrar la palabra seleccionada
const wordDisplay = document.createElement('p');
toolbar.appendChild(wordDisplay);

// Añadimos una variable para controlar si se ha seleccionado una temática
let temaSeleccionado = false;

function selectTheme(theme) {
    // Cambiamos el estado de temaSeleccionado a true
    temaSeleccionado = true;

    // Eliminamos los botones
    buttonContainer.style.display = 'none';

    // Seleccionamos una palabra al azar de la base de datos correspondiente
    let word;
    if (theme === 'animales') {
        word = animales[Math.floor(Math.random() * animales.length)];
    } else if (theme === 'frutas') {
        word = frutas[Math.floor(Math.random() * frutas.length)];
    }

    // Mostramos la palabra seleccionada en el menú
    wordDisplay.innerText = `Tu palabra es: ${word}`;
}

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting || !temaSeleccionado) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
