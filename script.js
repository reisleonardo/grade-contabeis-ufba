// Interatividade para mudar a cor da célula


// Interatividade para mudar o valor do "matéria restante"
document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById('total');
    const checkboxes = document.querySelectorAll('.discipline-checkbox');

    function updateTotal() {
        let total = 37; // Valor inicial

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total -= parseInt(checkbox.value, 10);
            }
        });

        totalSpan.textContent = total;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    // Atualiza o total ao carregar a página para refletir o estado inicial das checkboxes
    updateTotal();
});

// Interatividade para mudar o valor de "matéria optativa"
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.optativa');
    const horasRestantesSpan = document.getElementById('horas-restantes');
    
    // Valor inicial das horas optativas
    let horasRestantes = parseInt(horasRestantesSpan.textContent);
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Verifica se o checkbox está marcado
            if (checkbox.checked) {
                // Subtrai as horas
                horasRestantes -= parseInt(checkbox.value);
            } else {
                // Adiciona as horas de volta
                horasRestantes += parseInt(checkbox.value);
            }
            // Atualiza o texto do span com as horas restantes
            horasRestantesSpan.textContent = horasRestantes;
        });
    });
});