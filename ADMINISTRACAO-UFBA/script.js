// Interatividade para mudar as creditações
// Interatividade para atualizar a creditação da optativa e o valor restante
document.addEventListener('DOMContentLoaded', function() {
    const checkboxesOptativas = document.querySelectorAll('.optativa');
    const horasRestantesSpan = document.getElementById('horas-restantes');
    const creditacaoOptativa = document.getElementById('creditacao-optativa');
    
    // Valor inicial das horas optativas e da creditação
    let horasRestantes = parseInt(horasRestantesSpan.textContent);
    let creditacaoAtual = 0;

    // Função para atualizar tanto a creditação quanto as horas restantes
    function updateCreditacao() {
        creditacaoAtual = 0; // Zera a creditação antes de calcular
        
        // Recalcula a creditação baseada nos checkboxes marcados
        checkboxesOptativas.forEach(checkbox => {
            if (checkbox.checked) {
                creditacaoAtual += parseInt(checkbox.value);
            }
        });
        
        // Garante que a creditação não ultrapasse o valor máximo permitido (240 horas)
        if (creditacaoAtual > 240) {
            creditacaoAtual = 240;
        }
        
        // Atualiza o valor de horas restantes
        horasRestantes = 240 - creditacaoAtual;
        
        // Atualiza o texto no HTML
        creditacaoOptativa.textContent = creditacaoAtual;
        horasRestantesSpan.textContent = horasRestantes;

        // Exibe alerta se as horas optativas atingirem zero
        if (horasRestantes === 0) {
            alert('Você concluiu todas as horas optativas necessárias.');
        }
    }

    // Adiciona evento de mudança em cada checkbox para atualizar os valores
    checkboxesOptativas.forEach(checkbox => {
        checkbox.addEventListener('change', updateCreditacao);
    });
    
    // Inicializa a creditação e as horas restantes ao carregar a página
    updateCreditacao();
});
// Interatividade para creditação das obrigatórias
document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById('total');
    const checkboxes = document.querySelectorAll('.discipline-checkbox');
    const creditacaoObrigatoriaSpan = document.getElementById('creditacao-obrigatoria');

    // Tabela de disciplinas obrigatórias com suas respectivas cargas horárias
    const disciplinasObrigatorias = {
        'ADM202': 60,
        'ADMF52': 30,
        'ADMF54': 60,
        'ADMF56': 30,
        'DIR159': 60,
        'FCH001': 60,
        'MAT013': 90,
        'ADM170': 60,
        'ADM203': 60,
        'ADM218': 45,
        'DIR161': 60,
        'ECO155': 90,
        'MAT020': 60,
        'ADM223': 45,
        'ADM226': 60,
        'ADMF53': 30,
        'ADMF59': 75,
        'DIR164': 60,
        'ECO142': 45,
        'MAT191': 60,
        'ADM150': 60,
        'ADM172': 60,
        'ADM173': 60,
        'ADMF55': 60,
        'IPSA01': 60,
        'MAT023': 60,
        'ADM149': 60,
        'ADM174': 60,
        'ADM177': 60,
        'ADM211': 45,
        'ADMB81': 45,
        'ADMF72': 30,
        'ADM221': 240,
        'ADMF50': 60,
        'ADMF58': 60,
        'ADM154': 60,
        'ADM179': 60,
        'ADM204': 60,
        'ADM222': 60,
        'ADM227': 60,
        'ADMB80': 45,
        'ADMF73': 30,
        'ADM175': 60,
        'ADM181': 60,
        'ADMF60': 60,
        'ADM224': 90
    };

    // Atualiza o total de matérias restantes e a creditação obrigatória
    function updateTotal() {
        let total = 46; // Número total de disciplinas obrigatórias
        let creditacaoObrigatoria = 0; // Total de créditos nas disciplinas obrigatórias

        checkboxes.forEach(checkbox => {
            if (checkbox.checked && disciplinasObrigatorias[checkbox.id]) {
                total -= 1; // Reduz a quantidade de matérias obrigatórias restantes
                creditacaoObrigatoria += disciplinasObrigatorias[checkbox.id]; // Soma a carga horária da matéria concluída
            }
        });

        totalSpan.textContent = total; // Atualiza o número de matérias restantes
        creditacaoObrigatoriaSpan.textContent = creditacaoObrigatoria; // Atualiza a creditação obrigatória

        // Verifica se todas as disciplinas obrigatórias foram completadas
        if (total === 0) {
            alert("Parabéns! Você concluiu todas as matérias obrigatórias.");
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    // Atualiza o total ao carregar a página para refletir o estado inicial das checkboxes
    updateTotal();
});



// Interatividade para mudar a cor da célula
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.discipline-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateRows);
    });

    function updateRows() {
        const rows = document.querySelectorAll('tr[data-requisitos]');

        rows.forEach(row => {
            const requisitos = row.getAttribute('data-requisitos').split(',');
            let allRequisitosAtendidos = true;

            requisitos.forEach(req => {
                const reqCheckbox = document.getElementById(req.trim());
                if (!reqCheckbox || !reqCheckbox.checked) {
                    allRequisitosAtendidos = false;
                }
            });

            if (allRequisitosAtendidos) {
                row.id = 'liberado';
                row.style.backgroundColor = 'greenyellow'; // Cor para liberado
            } else {
                row.id = 'trancado';
                row.style.backgroundColor = 'rgba(255, 0, 0, 0.46)'; // Cor para trancado
            }
        });
    }
});

// Interatividade para mudar o valor do "matéria restante"
document.addEventListener("DOMContentLoaded", function() {
    const totalSpan = document.getElementById('total');
    const checkboxes = document.querySelectorAll('.discipline-checkbox');

    function updateTotal() {
        let total = 46; // Valor inicial

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

            // Exibe o aviso somente quando as horas restantes forem zero ou menor que zero
            if (horasRestantes <= 0) {
                alert('Você já concluiu as horas optativas necessárias. Para selecionar outras matérias, desmarque as que já foram escolhidas.');
            }
        });
    });
});