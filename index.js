document.addEventListener('DOMContentLoaded', () => {
    const activarFuncionesBtn = document.getElementById('activarFuncionesBtn');
    
    const motivationsList = document.getElementById('motivations-list');
    const frustrationsList = document.getElementById('frustrations-list');
    const motivationsBox = document.querySelector('.motivations h3');
    const frustrationsBox = document.querySelector('.frustrations h3');

    const gorillazTitle = document.getElementById('gorillaz-title');
    
    const blurTitle = document.getElementById('blur-title');
    const blurText = document.getElementById('blur-text');
    const blurTextShort = 'Blur es una banda de rock británica formada en Londres en 1988... popularizaron el género del britpop.';
    const blurTextLong = 'Blur es una banda de rock británica formada en Londres en 1988. Como una de las bandas más prominentes del movimiento Britpop, se hicieron conocidos por su experimentación con diversos géneros. Sus miembros son Damon Albarn, Graham Coxon, Alex James y Dave Rowntree. Popularizaron el género del britpop.';
    
    const cambiarGeneroBtn = document.getElementById('cambiarGeneroBtn');
    const generoTexto = document.getElementById('genero-texto');
    let esNino = true;
    const toggleHiddenContent = (element) => {
        element.classList.toggle('hidden-content');
    };
    motivationsBox.addEventListener('click', () => {
        toggleHiddenContent(motivationsList);
    });

    frustrationsBox.addEventListener('click', () => {
        toggleHiddenContent(frustrationsList);
    });

    activarFuncionesBtn.addEventListener('click', () => {
        alert('Funcionalidades JS (Ocultar/Mostrar, Lógica Condicional, etc.) activadas o disponibles.');
        console.log('Interacciones JS activadas.');
    });
    gorillazTitle.addEventListener('click', () => {
        if (gorillazTitle.style.color === 'red') {
            gorillazTitle.style.color = ''; 
        } else {
            gorillazTitle.style.color = 'red';
        }
    });
    blurTitle.addEventListener('click', () => {
        if (blurText.textContent === blurTextShort) {
            blurText.textContent = blurTextLong;
            blurTitle.textContent = 'Blur (Click para Texto Corto)';
        } 
      
        else {
            blurText.textContent = blurTextShort;
            blurTitle.textContent = 'Blur (Click para Texto Largo/Corto)';
        }
    });

    cambiarGeneroBtn.addEventListener('click', () => {
        if (esNino) {
            generoTexto.innerHTML = generoTexto.innerHTML.replace('niño', 'niña');
            esNino = false;
            cambiarGeneroBtn.textContent = 'Alternar "Niña" a "Niño"';
        } 
        else {
            generoTexto.innerHTML = generoTexto.innerHTML.replace('niña', 'niño');
            esNino = true;
            cambiarGeneroBtn.textContent = 'Alternar "Niño" a "Niña"';
        }
    });
});