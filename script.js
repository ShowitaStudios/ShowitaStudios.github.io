//Inicio del Script jeje
const botonGrind = document.getElementById('btnMusica');
botonGrind.addEventListener('click', () => {
    alert("Instalando troyano...");
});
//ABRIR IMÁGENES EN PANTALLA COMPLETA
const imagenes2D = document.querySelectorAll('.img-portfolio');

imagenes2D.forEach(imagen => {
    imagen.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');
        const imagenGrande = document.createElement('img');
        imagenGrande.classList.add('lightbox-imagen');
        imagenGrande.src = imagen.src;
        imagenGrande.alt = imagen.alt;
        overlay.appendChild(imagenGrande);
        document.body.appendChild(overlay);
        setTimeout(() => {
            overlay.classList.add('activo');
        }, 10);
        overlay.addEventListener('click', () => {
            overlay.classList.remove('activo');
            setTimeout(() => {
                overlay.remove();
            }, 300);
        });
    });
});
//SISTEMA DE ICONOS ANIMADOS ALEATORIOS
const misIconos = [
    'Media/metro_51.png', 
    'Media/metro_76.png', 
    'Media/metro_62.png', 
    'Media/metro_73.png',
    'Media/metro_51.png', 
    'Media/metro_76.png', 
    'Media/metro_62.png', 
    'Media/metro_73.png',
    'Media/metro_52.png', 
    'Media/metro_54.png', 
    'Media/metro_52.png', 
    'Media/metro_54.png', 
];

function crearIconoFlotante(nombreArchivo) {
    const icono = document.createElement('img');
    icono.src = nombreArchivo;
    icono.classList.add('icono-flotante');
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    icono.style.left = `${posX}px`;
    icono.style.top = `${posY}px`;
    const duracionViaje = Math.random() * 15 + 15; 
    icono.style.transition = `left ${duracionViaje}s linear, top ${duracionViaje}s linear`;
    icono.style.animation = `flotadoSutil ${Math.random() * 2 + 2}s ease-in-out infinite`;
    document.body.appendChild(icono);
    function moverIcono() {
        const nuevoX = Math.random() * (window.innerWidth - 60);
        const nuevoY = Math.random() * (window.innerHeight - 60);
        
        icono.style.left = `${nuevoX}px`;
        icono.style.top = `${nuevoY}px`;
        setTimeout(moverIcono, duracionViaje * 1000);
    }
    setTimeout(moverIcono, 50);
}
window.addEventListener('DOMContentLoaded', () => {
    misIconos.forEach(archivo => {
        crearIconoFlotante(archivo);
        crearIconoFlotante(archivo);
    });
});