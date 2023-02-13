let btnAdd = document.querySelector("input#btn1");

btnAdd.addEventListener("click", addNumero);

function addNumero() {
    let getNum = document.querySelector("input#numero");
    let num = Number(getNum.value);

    if (getNum.value.length == 0 || num > 100 || num <= 0) {
        window.alert("Valor inválido ou já Adicionado na Lista");
    } else {
        let selectRes = document.querySelector("select#arrayNum");
        
        let addItem = document.createElement("option");

        addItem.text = `Valor Adicionado: ${num}`;
        selectRes.appendChild(addItem);
    }
}