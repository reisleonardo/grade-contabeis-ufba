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