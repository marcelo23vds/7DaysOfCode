const NOME = window.prompt ('Qual é o seu nome?');
const IDADE = window.prompt ('Quantos anos você tem?');
const LINGUAGEM = window.prompt ('Qual linguagem de programação você está estudando?');
 
if (NOME == 0 || IDADE == 0 || LINGUAGEM == 0) {
    window.alert ('Por favor atualize a página e preencha todos os campos!');
} else {
    window.alert (`Olá ${NOME}, você tem ${IDADE} anos e já está aprendendo ${LINGUAGEM}!`);
}

const RESPOSTA = window.prompt (`Você gosta de estudar ${LINGUAGEM}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (RESPOSTA == 1) {
    window.alert ('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (RESPOSTA == 2) {
    window.alert ('Ahh que pena... Já tentou aprender outras linguagens?');
} else {
    window.alert ('Por favor atualize a página e digite um número válido!');
}