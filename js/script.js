const btnCalcular = document.querySelector('#btnCalcular');
const inputs = document.querySelectorAll('#input');
const inputDia = document.querySelector('#inputDia');
const inputMes = document.querySelector('#inputMes');
const inputAno = document.querySelector('#inputAno');

const boxInput = document.querySelector('#boxInput');
const notificacoes = document.querySelectorAll('#notificacao');

const rsAnos = document.querySelector('#rsAnos');
const rsMeses = document.querySelector('#rsMeses');
const rsDias = document.querySelector('#rsDias');

btnCalcular.addEventListener('click', () => {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() +1;
    const diaAtual = dataAtual.getDate();

    boxInput.classList.remove('erro');
    notificacoes.forEach((item) => {
        item.classList.remove('active');
        item.innerHTML = 'This field is required';
    });

    let dia = inputs[0].value;
    let mes = inputs[1].value;
    let ano = inputs[2].value;

    let diaOk, mesOk, anoOk = undefined;

    inputs.forEach((input, pos) => {

        input.classList.remove('erro');
        
        let num = input.value;

        if(num == '') {
            boxInput.classList.add('erro');
            notificacoes[pos].classList.add('active');
        } 
    });

    if(dia > 31) {
        boxInput.classList.add('erro');
        notificacoes[0].classList.add('active');
        notificacoes[0].innerHTML = 'Must be a valid day';
    } else {
        if((mes == 2 && dia > 28) || (mes == 4 && dia > 30) || (mes == 6 && dia > 30) || (mes == 9 && dia > 30) || (mes == 11 && dia > 30)) {
            boxInput.classList.add('erro');
            notificacoes[0].classList.add('active');
            notificacoes[0].innerHTML = 'Must be a valid day';
        } else {
            if(dia - diaAtual) {
                mes = -1;
            }
            diaOk = diaAtual - dia;
        }
    }
    
    if (mes > 12) {
        boxInput.classList.add('erro');
        notificacoes[1].classList.add('active');
        notificacoes[1].innerHTML = 'Must be a valid month';
    } else {
        mesOk = mesAtual - mes;
    }

    if(ano.length < 4) {
        boxInput.classList.add('erro');
        notificacoes[2].classList.add('active');
        notificacoes[2].innerHTML = 'Invalid date';
    } else if(ano > anoAtual) {
        boxInput.classList.add('erro');
        notificacoes[2].classList.add('active');
        notificacoes[2].innerHTML = 'Must be in the past';
    } else {
        anoOk = anoAtual - ano;
    }


    if(diaOk != undefined && mesOk != undefined && anoOk != undefined) {
        rsAnos.innerHTML = anoOk;
        rsMeses.innerHTML = mesOk;
        rsDias.innerHTML = diaOk;
    }

});