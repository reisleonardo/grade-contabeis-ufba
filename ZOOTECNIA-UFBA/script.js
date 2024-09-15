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
        if (creditacaoAtual > 180) {
            creditacaoAtual = 180;
        }
        
        // Atualiza o valor de horas restantes
        horasRestantes = 180 - creditacaoAtual;
        
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
        'MEVA40': 60,
        'MEVA41': 60,
        'MEVA42': 45,
        'MEVA43': 45,
        'MEVA44': 90,
        'MEVA45': 30,
        'MEVA46': 45,
        'MEVA47': 60,
        'MEVA48': 60,
        'MEVA50': 30,
        'MEVA51': 60,
        'MEVA52': 45,
        'MEVA53': 60,
        'MEVA54': 45,
        'MEVA55': 45,
        'MEVA56': 60,
        'MEVA57': 45,
        'MEVA58': 60,
        'MEVA59': 60,
        'MEVA60': 45,
        'MEVA61': 45,
        'MEVA62': 45,
        'MEVA63': 45,
        'MEVA65': 45,
        'MEVA66': 60,
        'MEVA67': 60,
        'MEVA68': 45,
        'MEVA73': 60,
        'MEVA49': 60,
        'MEVA64': 60,
        'MEVA69': 60,
        'MEVA70': 60,
        'MEVA71': 30,
        'MEVA74': 60,
        'MEVA75': 60,
        'MEVA72': 30,
        'MEVA76': 60,
        'MEVA77': 45,
        'MEVA78': 60,
        'MEVA79': 60,
        'MEVA79': 60,
        'MEVD16': 150,
        'MEVA80': 30,
        'MEVA82': 45,
        'MEVA83': 60,
        'MEVA84': 45,
        'MEVA85': 60,
        'MEVA86': 60,
        'MEVA87': 45,
        'MEVA88': 45,
        'MEVA89': 60,
        'MEVA90': 45,
        'MEVA91': 60,
        'MEVA92': 60,
        'MEVD17': 135,
        'MEVA94': 60,
        'MEVA95': 45,
        'MEVA96': 60,
        'MEVA97': 60,
        'MEVA98': 45,
        'MEVA99': 60
    };

    // Atualiza o total de matérias restantes e a creditação obrigatória
    function updateTotal() {
        let total = 60; // Número total de disciplinas obrigatórias
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
        let total = 60; // Valor inicial

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