// Datos del slider: imágenes principales, textos y galería de imágenes adicionales
const sliderData = [
    {
        buttonImage: 'assets/haven/Haven_button.webp',
        mainImage: 'assets/haven/Haven_mini-map.webp',
        title: 'Haven',
        text: 'Haven es un mapa de Valorant caracterizado por su diseño único con tres sitios de bomba (A, B y C), lo que lo convierte en un desafío tanto para los atacantes como para los defensores. El mapa tiene una estructura central abierta con múltiples rutas que pueden ser utilizadas para flanquear, lo que requiere un juego táctico y bien coordinado. Las zonas clave incluyen el "Mid", que conecta las tres áreas de ataque y defiende, y "A Long" y "C Long", que son puntos de acceso largos y estrechos. Los defensores deben ser muy ágiles para cubrir todos los sitios a la vez, mientras que los atacantes deben planear ataques diversificados.',
        gallery: [
            { src: 'assets/haven/omenB.png' },
            { src: 'assets/haven/razeB.png' },
            { src: 'assets/haven/skyeB.png' },
            { src: 'assets/haven/viperB.png' }
        ]
    },
    {
        buttonImage: 'assets/pearl/Button_Pearl.webp',
        mainImage: 'assets/pearl/Pearl_minimap.webp',
        title: 'Pearl',
        text: 'Pearl es un mapa en Valorant con un diseño lineal, centrado en un área urbana subacuática, que combina calles abiertas y pasillos estrechos. Tiene dos sitios de bomba (A y B), con un centro en el que el control del "Mid" es esencial para ambos equipos. Los atacantes suelen tener que lidiar con espacios abiertos, mientras que los defensores pueden aprovechar varias elevaciones y ángulos estrechos. El mapa tiene una buena cantidad de cobertura, pero también exige buena coordinación para mantener el control de las áreas clave, como el "Mid" y las entradas a los sitios de bomba.',
        gallery: [
            { src: 'assets/pearl/razeB.png' },
            { src: 'assets/pearl/cloveB.png' },
            { src: 'assets/pearl/breachB.png' },
            { src: 'assets/pearl/sovaB.webp' }
        ]
    },
    {
        buttonImage: 'assets/Lotus/Lotus_button.webp',
        mainImage: 'assets/Lotus/Lotus_minimap.png',
        title: 'Lotus',
        text: 'Lotus es un mapa en Valorant que se destaca por su diseño circular y dinámico, con tres sitios de bomba (A, B y C) y una estructura de "Mid" bastante fluida. Tiene una gran cantidad de puertas giratorias que los jugadores pueden usar para cambiar la dinámica de las rutas de ataque y defensa. Las áreas de Lotus son abiertas pero tienen muchas interacciones y espacios cerrados, como salas y pasillos, lo que permite un juego de estrategia en equipo. La rotación de los sitios de bomba puede ser compleja debido a las rutas cambiantes y la necesidad de adaptarse a las puertas que se pueden abrir o cerrar.',
        gallery: [
            { src: 'assets/Lotus/jettB.png' },
            { src: 'assets/Lotus/cloveB.png' },
            { src: 'assets/Lotus/sovaB.webp' },
            { src: 'assets/Lotus/neonB.png' }
        ]
    },
    {
        buttonImage: 'assets/split/split_button.png',
        mainImage: 'assets/split/split_minimap.png',
        title: 'Split',
        text: 'Split es un mapa de Valorant centrado en el control del "Mid", que conecta las dos áreas de ataque y defensa con varias rutas verticales y estrechas. El mapa está dividido por un gran muro central, creando dos secciones que requieren una coordinación perfecta entre los atacantes para superarlo. Los sitios de bomba A y B están ubicados en extremos opuestos del mapa, y el "Mid" es esencial para la rotación y el control. Las zonas verticales, como los techos y los elevadores, añaden un desafío adicional a los jugadores, haciendo que los movimientos sean dinámicos y ágiles.',
        gallery: [
            { src: 'assets/split/jettB.png' },
            { src: 'assets/split/cloveB.png' },
            { src: 'assets/split/razeB.png' },
            { src: 'assets/split/breachB.png' }
        ]
    },
    {
        buttonImage: 'assets/icebox/Icebox_button.png',
        mainImage: 'assets/icebox/icebox_mininap.png',
        title: 'Icebox',
        text: 'Icebox es un mapa de Valorant que se caracteriza por su diseño vertical y cerrado, con una gran cantidad de áreas elevadas y pasillos estrechos. Los sitios de bomba A y B están rodeados por plataformas y escaleras, lo que ofrece muchas oportunidades para moverse por las alturas y sorprender a los enemigos. El "Mid" es clave para la rotación, ya que conecta las dos secciones del mapa y permite a los atacantes crear presión desde diferentes ángulos. Las rutas abiertas y las plataformas elevadas también favorecen a los agentes con movilidad y habilidades de control del espacio.',
        gallery: [
            { src: 'assets/icebox/chamberB.png' },
            { src: 'assets/icebox/viperB.png' },
            { src: 'assets/icebox/sovaB.webp' },
            { src: 'assets/icebox/razeB.png' }
        ]
    },
    {
        buttonImage: 'assets/abyss/abyss_button.webp',
        mainImage: 'assets/abyss/abyss_minimap.png',
        title: 'Abyss',
        text: 'Abyss es un nuevo mapa en Valorant que destaca por su jugabilidad de alto riesgo y alta recompensa. Está diseñado con áreas verticales y trampas mortales que obligan a los jugadores a tener cuidado, ya que caer del mapa puede significar la muerte. El mapa tiene dos sitios de bomba, una distribución de tres carriles y rutas en el "Mid" que se ramifican, lo que permite múltiples estrategias. Las plataformas estrechas y las áreas elevadas hacen que la movilidad y la posicionamiento sean clave, mientras que las caídas accidentalmente pueden cambiar el curso de una ronda',
        gallery: [
            { src: 'assets/abyss/sovaB.webp' },
            { src: 'assets/abyss/breachB.png' },
            { src: 'assets/abyss/omenB.png' },
            { src: 'assets/abyss/jettB.png' }
        ]
    },
    {
        buttonImage: 'assets/sunset/Sunset_button.webp',
        mainImage: 'assets/sunset/Sunset_minimap.webp',
        title: 'Sunset',
        text: 'Sunset, con un ambiente al estilo de la "hora dorada". Presenta largos pasillos que se cruzan entre sí, lo que facilita un juego metódico y controlado, similar a los mapas de Counter-Strike. La estética del mapa está inspirada en un vecindario de Boyle Heights, en Los Ángeles, donde se encuentra una instalación secreta de la facción Kingdom, y que ahora está siendo invadido por extrañas criaturas que se escaparon de dicha instalación. Los jugadores pueden interactuar con una puerta mecanizada que conecta el mercado de B con el patio central de medio, lo que añade una capa estratégica adicional al juego',
        gallery: [
            { src: 'assets/sunset/skyeB.png' },
            { src: 'assets/sunset/neonB.png' },
            { src: 'assets/sunset/cloveB.png' },
            { src: 'assets/sunset/omenB.png' }
        ]
    },
    
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
    const visibleButtons = 7;
    const startIndex = (currentIndex - 3 + totalItems) % totalItems;

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