function resultadoSorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validarEntradas(min, max, quantidade) {
    if (min > max) {
        alert('O número mínimo é maior que o número máximo.');
        return false;
    }

    return true;
}

function atualizarResultado(mensagem) {
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${mensagem}</label>`;
}

function sortear() {
    const quantidadeInput = document.getElementById('quantidade');
    const minInput = document.getElementById('de');
    const maxInput = document.getElementById('ate');
    const resultadoTela = document.getElementById('resultado');

    const quantidade = parseInt(quantidadeInput.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    resultadoTela.innerHTML = ''; // Limpa o campo antes de exibir novos números

    if (!validarEntradas(min, max, quantidade)) return;

    const numerosSorteados = new Set();

    while (numerosSorteados.size < quantidade) {
        numerosSorteados.add(resultadoSorteio(min, max));
    }

    const sorteadosTexto = (quantidade === 1) ? 'Número sorteado' : 'Números sorteados';
    atualizarResultado(`${sorteadosTexto}: ${[...numerosSorteados].join(', ')}`);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    atualizarResultado('');

    const botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}