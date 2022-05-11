var escolha = '';

while (escolha != 'sair') {
    escolha = prompt('Digite uma opção de operação: "soma", "subtração", "multiplicação"    ou "divisão" / digite "sair" caso queira parar por aqui.')

    switch (escolha) {
        case 'sair':
            alert('Até a próxima!');
            break
        case 'soma':
            var num1 = prompt('Digite o primeiro número:');
            var num2 = prompt('Digite o segundo número:');
            soma()
            break
        case 'subtração':
            var num1 = prompt('Digite o primeiro número:');
            var num2 = prompt('Digite o segundo número:');
            subtração()
            break
        case 'multiplicação':
            var num1 = prompt('Digite o primeiro número:');
            var num2 = prompt('Digite o segundo número:');
            multiplicação()
            break
        case 'divisão':
            var num1 = prompt('Digite o primeiro número:');
            var num2 = prompt('Digite o segundo número:');
            divisão()
            break
    }

    function soma() {
        let resultado = parseInt(num1) + parseInt(num2);
        alert(`${num1} + ${num2} = ${resultado}`);
    }

    function subtração() {
        let resultado = parseInt(num1) - parseInt(num2);
        alert(`${num1} - ${num2} = ${resultado}`);
    }

    function multiplicação() {
        let resultado = parseInt(num1) * parseInt(num2);
        alert(`${num1} x ${num2} = ${resultado}`);
    }

    function divisão() {
        let resultado = parseInt(num1) / parseInt(num2);
        alert(`${num1} / ${num2} = ${resultado}`);
    }
}