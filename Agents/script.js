// Datos del slider: imágenes principales, textos y galería de imágenes adicionales
const sliderData = [
    {
        buttonImage: 'assets/buttons/cloveB.png',
        mainImage: 'assets/main_img/cloveM.png',
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
        buttonImage: 'assets/buttons/omenB.png',
        mainImage: 'assets/main_img/omenM.png',
        title: 'Omen',
        text: 'Omen es un controlador en Valorant que manipula sombras para confundir a los enemigos y dominar el campo de batalla. Su estilo de juego combina el sigilo, la movilidad y el control táctico, ideal para jugadores estratégicos.',
        gallery: [
            { src: 'assets/icons/2/a.png', title: 'Permite teletransportarse a una ubicación cercana' },
            { src: 'assets/icons/2/b.png', title: 'Lanza un proyectil que reduce la visión y el sonido de los enemigos en su trayectoria.' },
            { src: 'assets/icons/2/c.webp',title:'Proyecta orbes de sombra para bloquear líneas de visión.' },
            { src: 'assets/icons/2/d.png', title: 'Teletransporta a Omen a cualquier lugar del mapa. Si es interrumpido, regresa al punto inicial.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/jettB.png',
        mainImage: 'assets/main_img/jettM.png',
        title: 'Jett',
        text: 'Jett es una duelista en Valorant que destaca por su movilidad inigualable y capacidad de eliminar enemigos rápidamente. Diseñada para un estilo de juego agresivo, Jett recompensa a jugadores con excelente puntería y reflejos rápidos.',
        gallery: [
            { src: 'assets/icons/2/a.png', title: 'Permite teletransportarse a una ubicación cercana' },
            { src: 'assets/icons/2/b.png', title: 'Lanza un proyectil que reduce la visión y el sonido de los enemigos en su trayectoria.' },
            { src: 'assets/icons/2/c.webp',title:'Proyecta orbes de sombra para bloquear líneas de visión.' },
            { src: 'assets/icons/2/d.png', title: 'Teletransporta a Omen a cualquier lugar del mapa. Si es interrumpido, regresa al punto inicial.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/razeB.png',
        mainImage: 'assets/main_img/razeM.png',
        title: 'Raze',
        text: 'Raze es una duelista en Valorant enfocada en causar daño masivo con explosivos. Su estilo de juego es agresivo y caótico, ideal para jugadores que disfrutan de la acción directa y la capacidad de limpiar áreas con facilidad.',
        gallery: [
            { src: 'assets/icons/raze/Blast.png', title: 'Lanza un explosivo que puede detonar manualmente, empujando a enemigos o a Raze misma, permitiéndole reposicionarse rápidamente o acceder a lugares altos.' },
            { src: 'assets/icons/raze/bot.png', title: 'Despliega un robot que busca enemigos cercanos y explota al alcanzarlos, infligiendo daño significativo. Útil para despejar zonas o aplicar presión.' },
            { src: 'assets/icons/raze/Paint.png',title:'Lanza una granada que se divide en submuniciones tras explotar, causando daño en un área amplia. Excelente para despejar esquinas y zonas de alta densidad enemiga.' },
            { src: 'assets/icons/raze/Showstopper.png', title: 'Dispara un cohete de alto impacto que inflige daño masivo en un área. Ideal para eliminar múltiples enemigos o asegurar bajas cruciales.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/breachB.png',
        mainImage: 'assets/main_img/breachM.png',
        title: 'Breach',
        text: 'Breach es un iniciador en Valorant especializado en abrir sitios y desestabilizar a los enemigos con habilidades de alto impacto. Su conjunto de herramientas está diseñado para atravesar muros y crear oportunidades para su equipo mediante aturdimientos, desorientación y daño.',
        gallery: [
            { src: 'assets/icons/breach/flashpoint.png', title: 'Lanza una ráfaga de energía que atraviesa paredes y deja a los enemigos conmocionados.' },
            { src: 'assets/icons/breach/afthershock.png', title: 'Lanza una carga explosiva que aturde a todos los enemigos en su trayectoria, incluso a través de paredes.' },
            { src: 'assets/icons/breach/fault.png',title:'Dispara una onda de choque que atraviesa superficies y explota, causando daño a los enemigos atrapados en su área de efecto.' },
            { src: 'assets/icons/breach/rolling.png', title: 'Crea un terremoto masivo en un área amplia, aturdiendo y desorientando a todos los enemigos afectados.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/skyeB.png',
        mainImage: 'assets/main_img/skyeM.png',
        title: 'Skye',
        text: 'Skye es una iniciadora en Valorant que combina habilidades de exploración, curación y control para apoyar a su equipo mientras mantiene a los enemigos desorientados. Es ideal para jugadores que disfrutan de un enfoque táctico y de equipo.',
        gallery: [
            { src: 'assets/icons/skye/trailblazer.webp', title: 'Envía lobos rastreadores que buscan enemigos cercanos y los persiguen. Al alcanzar a un enemigo, lo detienen y lo desorientan brevemente.' },
            { src: 'assets/icons/skye/regrowth.webp', title: 'Emite una onda curativa que sana a los aliados dentro de su alcance (pero no a sí misma). ' },
            { src: 'assets/icons/skye/light.png',title:'Lanza un ave controlable que puede ser dirigida hacia enemigos. Al activarse, ciega a todos los oponentes en su área de efecto.' },
            { src: 'assets/icons/skye/seekers.png', title: 'Lanza tres rastreadores que buscan a los enemigos más cercanos. Cuando los alcanzan, los ralentizan y revelan su posición.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/neonB.png',
        mainImage: 'assets/main_img/neonM.webp',
        title: 'Neon',
        text: 'Neon es una duelista en Valorant diseñada para jugadores que prefieren un estilo de juego rápido y agresivo. Con habilidades enfocadas en movilidad y control del espacio, Neon domina los combates de corto alcance y puede desestabilizar al enemigo con su velocidad y precisión.',
        gallery: [
            { src: 'assets/icons/neon/Fastlane.webp', title: 'Crea dos paredes de energía paralelas que bloquean la visión y causan daño a quienes las atraviesen.' },
            { src: 'assets/icons/neon/High.webp', title: 'Neon se mueve rápidamente durante un tiempo limitado, ganando agilidad para flanquear o escapar de situaciones peligrosas.' },
            { src: 'assets/icons/neon/Relay.webp',title:'Lanza un relámpago que rebota entre superficies y enemigos, infligiendo daño a múltiples objetivos.' },
            { src: 'assets/icons/neon/Overdrive.webp', title: 'Neon canaliza un rayo de energía precisa que inflige daño constante. Mientras la habilidad está activa, Neon se mueve más rápido, y su precisión aumenta.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/yoruB.png',
        mainImage: 'assets/main_img/yoruM.webp',
        title: 'Yoru',
        text: 'Yoru es un duelista en Valorant enfocado en confundir a sus enemigos con ilusiones y reposicionamientos inesperados. Su conjunto de habilidades le permite engañar, flanquear y ejecutar jugadas impredecibles, convirtiéndolo en una amenaza constante en cualquier situación.',
        gallery: [
            { src: 'assets/icons/yoru/Fake.webp', title: 'Lanza un eco que imita pasos para engañar al enemigo, haciéndoles creer que Yoru está en un lugar diferente.' },
            { src: 'assets/icons/yoru/Blind.webp', title: 'Lanza un proyectil que rebota en superficies antes de explotar y cegar a todos en su área de efecto.' },
            { src: 'assets/icons/yoru/Gate.webp',title:'Coloca un marcador en el mapa al que Yoru puede teletransportarse instantáneamente desde cualquier lugar.' },
            { src: 'assets/icons/yoru/Dimensional.webp', title: 'Yoru entra en una dimensión alternativa en la que es invulnerable y invisible para los enemigos.' }
        ]
    },
    {
        buttonImage: 'assets/buttons/gekkoB.png',
        mainImage: 'assets/main_img/gekkoM.webp',
        title: 'Gekko',
        text: 'Gekko es un iniciador en Valorant con un estilo de juego dinámico y centrado en el apoyo táctico. Sus habilidades únicas le permiten desorientar a los enemigos, limpiar áreas y mantener el control del campo de batalla con la ayuda de sus compañeros de equipo. Gekko se destaca por el uso estratégico de sus criaturas, que añaden una capa creativa a su gameplay.',
        gallery: [
            { src: 'assets/icons/gekko/Mosh.webp', title: 'Lanza una bomba de Mosh, que se expande en un área amplia y explota después de un breve retraso, infligiendo un daño devastador.' },
            { src: 'assets/icons/gekko/Dizzy.webp', title: 'Lanza a Dizzy, una criatura que vuela hacia adelante y dispara un rayo que ciega a los enemigos que lo miran. Después de usarlo, Dizzy regresa y puede ser recogido para reutilizarlo tras un breve tiempo. ' },
            { src: 'assets/icons/gekko/wingman.webp',title:'Wingman corre hacia adelante buscando enemigos, aturdiendo al primer objetivo que encuentra. Alternativamente, si tienes la Spike, puedes usar Wingman para plantarla o desactivarla.' },
            { src: 'assets/icons/gekko/Thrash.webp', title: 'Controlas a Thrash, una criatura que se lanza hacia adelante y explota, atrapando a los enemigos en un área pequeña por un corto período de tiempo. ' }
        ]
    },
    {
        buttonImage: 'assets/buttons/viperB.png',
        mainImage: 'assets/main_img/viperM.webp',
        title: 'Viper',
        text: 'Viper es una controladora en Valorant que utiliza toxinas y gases químicos para manipular el campo de batalla. Con habilidades que bloquean la visión, infligen daño y desgastan a los enemigos, Viper es ideal para jugadores tácticos que buscan dominar áreas clave y reducir las opciones del equipo contrario.',
        gallery: [
            { src: 'assets/icons/viper/Snake.webp', title: 'Lanza una cápsula de veneno que al impactar crea un charco tóxico que inflige daño continuo a los enemigos en el área.' },
            { src: 'assets/icons/viper/Cloud.webp', title: 'Lanza un emisor de gas que puede reactivarse para crear una nube de veneno que bloquea la visión y daña a los enemigos que la atraviesan.' },
            { src: 'assets/icons/viper/Screen.webp',title:'Despliega una línea de emisores que pueden activarse para generar una barrera de gas tóxico. ' },
            { src: 'assets/icons/viper/viperulti.webp', title: 'Crea una gran nube de gas tóxico que cubre un área amplia. Los enemigos dentro de la nube tienen visión reducida, reciben daño continuo y se vuelven vulnerables debido al decaimiento de su salud.' }
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

