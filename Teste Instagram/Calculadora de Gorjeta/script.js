function TipCalculate() {
    var Valor = document.getElementById("valor").value;
    var serviço = document.getElementById("serviço").value;
    var pessoas = document.getElementById("pessoas").value;

    //validar a entrada
    if (Valor ==="" || serviço ==0) {
        alert("Entre com o valor");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (pessoas ==="" || pessoas <= 1) {
        pessoas = 1;
        document.getElementById("cada").style.display = "none";
    } else {
        document.getElementById("cada").style.display = "block";
    }

    //Calcular a gorjeta
    var total = (Valor * serviço) / pessoas;
    //sempre ter dois dígitos após a vírgula
    total = total.toFixed(2);
    //Mostrar a gorjeta
    document.getElementById("gorjetaTotal").style.display = "block";
    document.getElementById("gorjeta").innerHTML = total;    
}

//Esconder o valor da gorjeta no carregamento
document.getElementById("gorjetaTotal").style.display = "none";
document.getElementById("cada").style.display = "none";

//Clique para calcular
document.getElementById("calcular").onclick = function() {
    TipCalculate();
};