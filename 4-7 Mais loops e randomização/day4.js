const NUM_DEFINIDO = Math.floor(Math.random() * (10 - 0 + 1) + 0);

var tentativas = 0

while (tentativas < 3) {
    var chute = prompt('De 0 a 10, qual número você acha que estou pensando? (3 tentativas)');

    if (chute == NUM_DEFINIDO) {9
        alert(`Parabéns! eu realmente estava pensando no número ${NUM_DEFINIDO}`);
    } else {
        tentativas++
        alert(`ERROU! e você já utilizou ${tentativas} tentativa(s)`);
    }
}

if (tentativas = 3) {
    alert(`Você perdeu! eu estava pensando no número ${NUM_DEFINIDO}`);
}

