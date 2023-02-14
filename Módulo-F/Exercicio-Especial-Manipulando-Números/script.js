//Variaveis que recebem os dados da tela
let num = document.querySelector("input#numero");
let selectRes = document.querySelector("select#arrayNum");
let res = document.querySelector("div#res");
let valores = [];

//Botão para adicionar valores
let btnAdd = document.querySelector("input#btn1");
btnAdd.addEventListener("click", addNumero);

//botão para realizar a finalização dos dados
let btnFinalizar = document.querySelector("input#btn2");
btnFinalizar.addEventListener("click", finalizar);

//Funções de suporte para a Função addNumero()
function numbersValid(valid) {
    if (valid >= 1 && valid <= 100) {
        return true;
    } else {
        return false;
    }
}

function repeatedNumbers (rpt1, rpt2){
    if(rpt2.indexOf(Number(rpt1)) != -1){
        return true;
    }else {
        return false;
    }
}

//Função para o clique no botão 1, que adiciona valores
function addNumero() {
    if(numbersValid(num.value) && !repeatedNumbers(num.value, valores)){
        valores.push(Number(num.value));
        let itemList = document.createElement("option");
        itemList.text = `Valor adicionado: ${num.value}`;
        selectRes.appendChild(itemList);
    } else {
        window.alert("Valor inválido ou já foi adicionado na lista");
    }
    num.value = "";
    num.focus();
}

function finalizar() {


}