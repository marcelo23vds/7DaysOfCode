var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var outros = [];

do {
    var confirma = prompt('Você deseja adicionar um item na lista? (SIM digite 1 // ENCERRAR A LISTA digite 2)');

    if (confirma == 1) {
        var item = prompt('Qual item deseja adicionar?');
        var categoria = prompt(`Em qual categoria ${item} se encaixa? (1 - frutas / 2 - laticínios / 3 - congelados / 4 - doces / 5 - outros)`);

        switch (categoria) {
            case '1':
                frutas.push(item);
                break
            case '2':
                laticinios.push(item);
                break
            case '3':
                congelados.push(item);
                break
            case '4':
                doces.push(item);
                break
            case '5':
                outros.push(item);
                break
        }
    } 
} while (confirma != 2);

const RES = document.getElementById('lista');
RES.innerHTML += `FRUTAS: ${frutas}<br>LATICINIOS: ${laticinios}<br>CONGELADOS: ${congelados}<br>DOCES: ${doces}<br>OUTROS: ${outros} `