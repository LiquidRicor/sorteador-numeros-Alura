function resultadoSorteio(doNumero, ateNumero) {
    return Math.floor(Math.random() * (ateNumero - doNumero + 1)) + doNumero;
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    let resultadoTela = document.getElementById('resultado');

    resultadoTela.innerHTML = ''; //limpa o campo ates de exbir novos números

    if (doNumero > ateNumero) {
        alert('O número mínimo é maior que o número máximo');
        return;
    }

    // Verifica se o intervalo entre os números é menor que a quantidade solicitada
    if ((ateNumero - doNumero + 1) < quantidade) {
        alert('O intervalo entre o número mínimo e o número máximo é menor que a quantidade de números a serem sorteados.');
        return;
    }

    let numerosSorteados = new Set(); //O set previne a repetição de números

    while (numerosSorteados.size < quantidade) {
    let numero = resultadoSorteio(doNumero, ateNumero); //Armazena o número retornado
    numerosSorteados.add(numero);
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.add('container__botao');
    }

    let sorteadosTexto = (quantidade === 1) ? 'Número sorteado' : 'Números sorteados';

    resultadoTela.innerHTML = `<label class="texto__paragrafo">${sorteadosTexto}: ${[...numerosSorteados].join(', ')}</label>`;
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');

}