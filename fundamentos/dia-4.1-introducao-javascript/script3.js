const notaPessoaCandidata = 70;
if (notaPessoaCandidata >= 80) {
    console.log('Parabéns, você foi aprovado(a)');
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60) {
    console.log('Você está na lista de espera');
} else {
    console.log('Você foi reprovado');
}