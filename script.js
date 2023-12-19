document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#vermais');
    var extraContent = document.querySelector('#extra-content');

    button.addEventListener('click', function() {
        extraContent.classList.toggle('hidden');
        button.textContent = extraContent.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
    });
});
//cards ocultos
function mostrarMais() {
    // Selecione os cards adicionais
    var card4 = document.querySelector('.card4');
    var card5 = document.querySelector('.card5');
    var card6 = document.querySelector('.card6');

    // Alternar a visibilidade dos cards adicionais
    if (card4.style.display === 'none') {
        card4.style.display = 'block';
        card5.style.display = 'block';
        card6.style.display = 'block';

        // Atualizar o texto do botão para "Mostrar Menos"
        document.getElementById('mostrarMaisBtn').textContent = 'Mostrar Menos';
    } else {
        card4.style.display = 'none';
        card5.style.display = 'none';
        card6.style.display = 'none';

        // Atualizar o texto do botão para "Mostrar Mais"
        document.getElementById('mostrarMaisBtn').textContent = 'Mostrar Mais';
    }

    // Ocupe o espaço vazio criado pelos cards adicionais
    var containerProjetos = document.getElementById('containerprojetos');
    containerProjetos.style.flexWrap = 'wrap';
}
