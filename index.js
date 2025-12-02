document.addEventListener('DOMContentLoaded', () => {
    const motivationsList = document.getElementById('motivations-list');
    const frustrationsList = document.getElementById('frustrations-list');

    const motivationsTitle = motivationsList.previousElementSibling;
    const frustrationsTitle = frustrationsList.previousElementSibling;

    function toggleVisibility(element) {
        if (element.classList.contains('hidden-content')) {
            element.classList.remove('hidden-content');
        } else {
            element.classList.add('hidden-content');
        }
    }

    motivationsTitle.addEventListener('click', () => {
        toggleVisibility(motivationsList);
    });

    frustrationsTitle.addEventListener('click', () => {
        toggleVisibility(frustrationsList);
    });

    const gorillazTitle = document.getElementById('gorillaz-title');
    let colorIndex = 0;
    const colors = ['#007bff', '#28a745', '#ffc107', '#dc3545']; // Array de colores

    gorillazTitle.addEventListener('click', () => {
        gorillazTitle.style.borderBottomColor = colors[colorIndex];
        gorillazTitle.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });

    const blurTitle = document.getElementById('blur-title');
    const blurText = document.getElementById('blur-text');
    let isOriginalText = true;

    blurTitle.addEventListener('click', () => {
        if (isOriginalText) {

            blurText.textContent = "Blur es considerada una de las bandas pilares del Britpop de los 90. Tras la 'Batalla del Britpop' contra Oasis, Albarn comenzó a experimentar con sonidos más alternativos y la música del mundo, lo que eventualmente lo llevó a Gorillaz.";
            blurTitle.textContent = "Blur (Texto cambiado)";
        } else {
            blurText.textContent = "Blur es una banda de rock británica formada en Londres en 1988. Está formada por el cantante Damon Albarn, el guitarrista Graham Coxon, el bajista Alex James y el baterista Dave Rowntree. Su álbum debut, Leisure (1991), incorporó los sonidos del madchester y el shoegazing. Luego popularizaron el britpop en una batalla mediática con Oasis.";
            blurTitle.textContent = "Blur (Click para cambiar texto)";
        }
        
        isOriginalText = !isOriginalText;
    });
});