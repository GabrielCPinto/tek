
function validaCPF(){
    let cpf = document.getElementById('cpf').value;
    cpf = limpaFormatacao(cpf)
    if(cpf.length != 11){
        mostraResultado('CPF deve conter 11 dígitos', 'red');
        return;
    }
    if(verificaDigitosRepetidos(cpf)){
        mostraResultado('CPF não pode conter repetição do mesmo dígito', 'red');
        return;
    }

    if(calcularDigitoVerificador(cpf,2) && calcularDigitoVerificador(cpf,1)){
        mostraResultado('CPF invalido','red');
        return;
    }
    mostraResultado('Valido!', 'green');
    return;
}

function limpaFormatacao(cpf){
    cpf = cpf.replace(/\D/g, '');

    return cpf;
}

function mostraResultado(text, cor){
    const span = document.getElementById('resultado');

    span.innerHTML = text;
    span.style.color = cor;
}

function verificaDigitosRepetidos(cpf){
    return cpf.split('').every((d) => d === cpf[0]);
}

function calcularDigitoVerificador(cpf, pos){
    const sequencia = cpf.slice(0,8 + pos).split('');

    let soma = 0;
    let mul = 9 + pos;
    
    for(const num of sequencia){
        soma += mul * Number(num);
        mul--;
    }

    const restoDiv = (soma * 10) % 11;
    const digito = cpf.slice(8 + pos, 9 + pos);

    return restoDiv == digito;
}