document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#vermais');
    var extraContent = document.querySelector('#extra-content');

    button.addEventListener('click', function() {
        extraContent.classList.toggle('hidden');
        button.textContent = extraContent.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
    });
});
