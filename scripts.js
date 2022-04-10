onload = function () {
    // Cria a div onde mostra o resultado
    createDiv();
}

function calc(userBalanceAmount, highPrice, lowPrice, divCalc) {
    // Calcula o valor final, somando o valor que há na carteira com o lucro obtido
    let calc = (userBalanceAmount / lowPrice) * highPrice;

    // Calcula a diferença entre o valor da carteira e o lucro
    let difference = (calc - userBalanceAmount).toFixed(12);

    // Calcula a porcentagem de lucro obtido
    let percent = (calc / userBalanceAmount * 100).toFixed(2);

    // Mostra o resultado na div
    divCalc[0].innerText = `Diferença: R$ ${difference}`;
    divCalc[0].innerText += `\nValor final: R$ ${calc.toFixed(3)} (+${percent}%)`;
}

function createDiv() {
    // Cria a div onde mostra o resultado
    let divCalc = document.createElement("div");

    // Adiciona uma classe para a div
    divCalc.className = "divCalc";

    // Estilização
    divCalc.style.position = "fixed";
    divCalc.style.top = "0";
    divCalc.style.right = "0";
    divCalc.style.backgroundColor = "#736b5e";
    divCalc.style.border = "1px solid #736b5e";
    divCalc.style.padding = "10px";
    divCalc.style.borderBottomLeftRadius = "10px";
    divCalc.style.fontSize = "20px";
    divCalc.style.color = "rgba(25,26,26,255)";
    divCalc.style.fontWeight = "bold";
    divCalc.style.fontFamily = "Arial";
    divCalc.style.zIndex = "9999";
    divCalc.style.visibility = "hidden";

    // Insere a div na página
    document.body.appendChild(divCalc);
}

setInterval(function () {
    // Div do valor mais alto e mais baixo em que o ativo já chegou
    let div = document.getElementsByClassName("Small-bhul1g-0 TableData-yizjo6-0 edWdGQ hLAsue");

    // Div que exibe o valor das contas
    let divCalc = document.querySelectorAll(".divCalc");

    // Inicia quando for detectado o valor do ativo
    if (div.length > 0) {
        // Se a div não estiver visível, mostra ela
        if (divCalc[0].style.visibility = "hidden") {
            divCalc[0].style.visibility = "visible";
        }

        // Transforma o objeto em um array para pegar o valor
        let divsArray = Array.from(div);

        // Pega o valor do ativo
        let highPrice = Number(divsArray[0].innerText.split(" ")[1]);
        let lowPrice = Number(divsArray[1].innerText.split(" ")[1]);

        // Pega o valor da carteira
        let userBalanceAmount = Number(document.getElementsByClassName("H3-em9z5i-0 dUijat")[0].innerText.split(" ")[0]);

        // Envia para a função "calc" para que seja calculado os valores e inseridos na div
        calc(userBalanceAmount, highPrice, lowPrice, divCalc);
    } else {
        // Se não há mais valores para serem calculados, então esconde a div
        divCalc[0].style.visibility = "hidden";
    }
}, 300);