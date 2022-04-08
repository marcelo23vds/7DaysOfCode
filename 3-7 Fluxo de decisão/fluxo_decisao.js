const ESCOLHA = prompt('Escolha para qual área você quer seguir: Digite 1 para Front-End ou 2 para Back-End');

if (ESCOLHA == 1) {
    prompt('Digite 1 se quer aprender React ou 2 se deseja aprender Vue');

    FRONT_FULL = prompt('Digite 1 se deseja seguir se especializando em Front-End ou digite 2 caso prefira se tornar Fullstack');

    if (FRONT_FULL == 1) {
        alert('Boa sorte em sua jornada no Front-end!');
    } else if (FRONT_FULL == 2) {
        alert('Você vai ser um grande Dev Fullstack!');
    } else {
        alert ('Por favor, atualize a página e digite um número válido!');
    }

} else if (ESCOLHA == 2) {
    prompt('Digite 1 se quer aprender C# ou 2 se deseja aprender Java');

    BACK_FULL = prompt('Digite 1 se deseja seguir se especializando em Back-end ou digite 2 caso prefira se tornar Fullstack');

    if (BACK_FULL == 1) {
        alert('Boa sorte em sua jornada no Back-end!');
    } else if (BACK_FULL == 2) {
        alert('Você vai ser um grande Dev Fullstack!');
    } else {
        alert ('Por favor, atualize a página e digite um número válido!');
    }

} else {  
    alert ('Por favor, atualize a página e digite um número válido!');
}

let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "ok" se SIM');
while (msg === 'ok') {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é uma tecnologia muito massa!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}