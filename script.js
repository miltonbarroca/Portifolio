        // Espera até que o DOM esteja carregado
        document.addEventListener('DOMContentLoaded', function() {
            // Select button
            var button = document.getElementById('vermais');

            // Click Event
            button.addEventListener('click', function() {
                // Select extra content
                var extraContent = document.getElementById('extra-content');
                
                // Add/Remove Class Hidden
                extraContent.classList.toggle('hidden');

                // Change button text
                if (extraContent.classList.contains('hidden')) {
                    button.textContent = 'Ver mais';
                } else {
                    button.textContent = 'Ver menos';
                }
            });
        });