// Datos del slider: imágenes principales, textos y galería de imágenes adicionales
const sliderData = [
    {
        buttonImage: 'assets/buttons/1.png',
        mainImage: 'assets/main/1.webp',
        title: 'Clove',
        text: 'Clove es una agente controladora diseñada para jugadores que buscan manipular el mapa y desorientar al equipo enemigo. Su conjunto de habilidades le permite bloquear líneas de visión, restringir movimientos y controlar áreas clave con precisión táctica.',
        gallery: [
            { src: 'assets/icons/1/a.webp', title: 'Al activarla, recupera salud y obtiene un breve impulso de velocidad.' },
            { src: 'assets/icons/1/b.webp', title: 'Lanza un orbe que explota afectando a todos los enemigos en el área con un estado de decaimiento.' },
            { src: 'assets/icons/1/c.webp', title: 'Clove despliega nubes opacas en ubicaciones seleccionadas que bloquean completamente la visión.' },
            { src: 'assets/icons/1/d.webp', title: 'Tras ser eliminada, Clove puede activar esta habilidad para regresar al combate.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/2.webp',
        mainImage: 'assets/main/2.webp',
        title: 'Omen',
        text: 'Omen es un controlador en Valorant que manipula sombras para confundir a los enemigos y dominar el campo de batalla. Su estilo de juego combina el sigilo, la movilidad y el control táctico, ideal para jugadores estratégicos.',
        gallery: [
            { src: 'assets/icons/2/a.png', title: 'Permite teletransportarse a una ubicación cercana' },
            { src: 'assets/icons/2/b.png', title: 'Lanza un proyectil que reduce la visión y el sonido de los enemigos en su trayectoria.' },
            { src: 'assets/icons/2/c.webp',title:'Proyecta orbes de sombra para bloquear líneas de visión.' },
            { src: 'assets/icons/2/d.png', title: 'Teletransporta a Omen a cualquier lugar del mapa. Si es interrumpido, regresa al punto inicial.' }
        ]
    }
];

// Referencias a los elementos
const mainImage = document.getElementById('main-image');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
const sliderContainer = document.querySelector('.slider');
const imageRow = document.getElementById('image-row'); 

let currentIndex = 0; // Comienza en el primer elemento del slider

// Función para inicializar el slider
function initializeSlider() {
    updateSliderButtons();
    updateGallery(); // Genera las imágenes de la galería y el texto asociado
    initializeMainContent(); // Muestra contenido inicial
}

// Función para mostrar el contenido inicial
function initializeMainContent() {
    const initialData = sliderData[currentIndex];

    mainImage.src = initialData.mainImage;
    mainTitle.textContent = initialData.title;
    mainText.textContent = initialData.text;
    updateGallery(); // Asegurarse de inicializar la galería
}

// Función para actualizar los botones visibles en el slider
function updateSliderButtons() {
    sliderContainer.innerHTML = ''; 
    
    const totalItems = sliderData.length;
    const visibleButtons = 18;
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

        updateGallery();
        updateSliderButtons();
    }, 500);
}

// Función para actualizar las imágenes de la galería y los textos debajo
function updateGallery() {
    imageRow.innerHTML = ''; 

    sliderData[currentIndex].gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Imagen de la galería
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title; 
        img.classList.add('gallery-image');

        // Texto debajo de la imagen
        const text = document.createElement('div');
        text.classList.add('gallery-text');
        text.textContent = item.title;

        // Agregar imagen y texto al contenedor
        galleryItem.appendChild(img);
        galleryItem.appendChild(text);

        // Agregar el contenedor a la fila
        imageRow.appendChild(galleryItem);
    });
}


// Inicializar el slider al cargar la página
initializeSlider();

