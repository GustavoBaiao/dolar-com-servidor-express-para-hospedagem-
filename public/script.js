fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
.then(response => response.json())
.then(data => {
    const dolar = data.USDBRL;

    document.getElementById('nome-moeda').textContent = dolar.name;

    document.getElementById('valor-atual')
    .textContent = 'R$ ' + parseFloat(dolar.bid).toFixed(2);

    document.getElementById('menor-valor')
    .textContent = 'R$ ' + parseFloat(dolar.low).toFixed(2);

    document.getElementById('maior-valor')
    .textContent = 'R$ ' + parseFloat(dolar.high).toFixed(2);
})
.catch(error => {
        console.error('Erro ao buscar a cotação do dólar:', error);
})