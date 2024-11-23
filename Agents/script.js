// Datos del slider: imágenes principales, textos y galería de imágenes adicionales
const sliderData = [
    {
        buttonImage: 'assets/buttons/1.png',
        mainImage: 'assets/main/1.webp',
        title: 'Clove',
        text: 'Clove es un agente controlador en Valorant que se especializa en manipular el mapa y desorientar a los oponentes con precisión táctica. Su conjunto de habilidades le permite interrumpir el posicionamiento enemigo, bloquear líneas de visión y garantizar el dominio de áreas clave en cualquier situación. Diseñada para jugadores estratégicos, Clove recompensa un enfoque meticuloso y una buena lectura del mapa.',
        gallery: [
            { src: 'assets/icons/1/a.png', title: 'Curacion' },
            { src: 'assets/icons/1/b.png', title: 'degradado' },
            { src: 'assets/icons/1/c.png', title: 'smoke' },
            { src: 'assets/icons/1/d.png', title: 'revive' }
        ]
    },
    {
        buttonImage: 'assets/buttons/2.webp',
        mainImage: 'assets/main/2.webp',
        title: 'Omen',
        text: 'Jett es una duelista explosiva en Valorant, diseñada para jugadores que prefieren un estilo de juego agresivo y móvil. Con una velocidad inigualable y habilidades de reposicionamiento, Jett sobresale en eliminar enemigos rápidamente y retirarse antes de ser alcanzada. Es una maestra de la agilidad que premia la precisión y la creatividad en el campo de batalla.',
        gallery: [
            { src: 'assets/icons/2/a.png', title: 'Info de la imagen 1' },
            { src: 'assets/icons/2/b.png', title: 'Info de la imagen 2' },
            { src: 'assets/icons/2/c.webp', title: 'Info de la imagen 3' },
            { src: 'assets/icons/2/d.png', title: 'Info de la imagen 4' }
        ]
    },
    {
        buttonImage: 'assets/buttons/3.webp',
        mainImage: 'assets/main/3.webp',
        title: 'Jett',
        text: 'Omen es un controlador único en Valorant, especializado en dominar el mapa a través del sigilo, la confusión y el posicionamiento estratégico. Su kit de habilidades está diseñado para desorientar al enemigo, bloquear líneas de visión y crear oportunidades inesperadas para su equipo. Con un enfoque en el sigilo y la movilidad, Omen recompensa a los jugadores que piensan un paso adelante en cada enfrentamiento.',
        gallery: [
            { src: 'assets/icons/3/a.webp', title: 'Info de la imagen 1' },
            { src: 'assets/icons/3/b.webp', title: 'Info de la imagen 2' },
            { src: 'assets/icons/3/c.webp', title: 'Info de la imagen 3' },
            { src: 'assets/icons/3/d.webp', title: 'Info de la imagen 4' }
        ]
    }
    // Agregar más elementos según sea necesario
];

// Referencias a los elementos
const mainImage = document.getElementById('main-image');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
const sliderContainer = document.querySelector('.slider');
const imageRow = document.getElementById('image-row'); // Contenedor para las imágenes adicionales

let currentIndex = 0;

// Función para inicializar el slider
function initializeSlider() {
    updateSliderButtons();
}

// Función para actualizar los botones visibles en el slider
function updateSliderButtons() {
    sliderContainer.innerHTML = ''; // Limpiar botones previos

    const totalItems = sliderData.length;
    const visibleButtons = 5;
    const startIndex = (currentIndex - 2 + totalItems) % totalItems;

    for (let i = 0; i < visibleButtons; i++) {
        const buttonIndex = (startIndex + i) % totalItems;

        const button = document.createElement('img');
        button.src = sliderData[buttonIndex].buttonImage;
        button.alt = `Botón ${buttonIndex + 1}`;
        button.classList.add('slider-button');
        if (buttonIndex === currentIndex) {
            button.classList.add('selected');
        }
        button.addEventListener('click', () => changeContent(buttonIndex));
        sliderContainer.appendChild(button);
    }
}

// Función para cambiar el contenido central
function changeContent(index) {
    currentIndex = index;

    mainImage.classList.add('animate');
    mainTitle.classList.add('fade-out');
    mainText.classList.add('fade-out');

    setTimeout(() => {
        mainImage.src = sliderData[currentIndex].mainImage;
        mainTitle.textContent = sliderData[currentIndex].title;
        mainText.textContent = sliderData[currentIndex].text;

        mainImage.classList.remove('animate');
        mainTitle.classList.remove('fade-out');
        mainText.classList.remove('fade-out');
        mainTitle.classList.add('fade-in');
        mainText.classList.add('fade-in');

        updateGallery(); // Actualizar las imágenes adicionales
        updateSliderButtons();
    }, 500);
}

// Función para actualizar las imágenes adicionales
function updateGallery() {
    imageRow.innerHTML = ''; // Limpiar imágenes previas

    sliderData[currentIndex].gallery.forEach(item => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.title = item.title; // Texto al mantener el mouse sobre la imagen
        img.classList.add('gallery-image');
        imageRow.appendChild(img);
    });
}

// Inicializar el slider
initializeSlider();

