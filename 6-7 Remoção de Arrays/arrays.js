let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];
let remover = '';

let confirma = 1;

while (confirma != 2) {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && outros.length === 0) {
        confirma = prompt('Você deseja adicionar um item na lista? (ADICIONAR digite 1 // ENCERRAR A LISTA digite 2)');
    } else {
        confirma = prompt('Você deseja adicionar ou remover um item na lista? (ADICIONAR digite 1 // ENCERRAR A LISTA digite 2 // REMOVER digite 3)');
    }
    
    if (confirma == 1) {
        let item = prompt('Qual item deseja adicionar?');
        let categoria = prompt(`Em qual categoria ${item} se encaixa? (1 - frutas / 2 - laticínios / 3 - congelados / 4 - doces / 5 - outros)`);

        switch (categoria) {
            case '1':
                frutas.push(item);
                break;
            case '2':
                laticinios.push(item);
                break;
            case '3':
                congelados.push(item);
                break;
            case '4':
                doces.push(item);
                break;
            case '5':
                outros.push(item);
                break;
        }
    } else if (confirma == 3) {
        remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Outros: ${outros}\n\n Qual item deseja remover?`);
        if (frutas.indexOf(remover) != -1) {
            frutas.splice(frutas.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
        } else if (laticinios.indexOf(remover) != -1) {
            laticinios.splice(laticinios.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
        } else if (congelados.indexOf(remover) != -1) {
            congelados.splice(congelados.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
        } else if (doces.indexOf(remover) != -1) {
            doces.splice(doces.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
        } else if (outros.indexOf(remover) != -1) {
            outros.splice(outros.indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
        } else {
            alert('Não foi possivel encontrar o item dentro da lista!');
        }
    }
}

const LISTA_FINAL = document.getElementById('lista');
LISTA_FINAL.innerHTML += (`FRUTAS: ${frutas}<br>LATICÍNIOS: ${laticinios}<br>CONGELADOS: ${congelados}<br>DOCES: ${doces}<br>OUTROS: ${outros}`);