document.addEventListener('DOMContentLoaded', function () {
    const verMaisButton = document.querySelector('.vermais');
    const aboutText = document.querySelector('.about-text');

    verMaisButton.addEventListener('click', function () {
        aboutText.classList.toggle('collapsed');
        aboutText.classList.toggle('expanded');

        if (aboutText.classList.contains('collapsed')) {
            verMaisButton.innerText = 'Ver mais';
        } else {
            verMaisButton.innerText = 'Ver menos';
        }
    });
});