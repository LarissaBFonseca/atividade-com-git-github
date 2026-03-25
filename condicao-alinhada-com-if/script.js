let renda = Number(prompt("Digite sua renda"));
if(!isNaN(renda)){
    if (renda >= 3000) {
        let nomelimpo = prompt("Nome limpo? (sim ou não)");
        if (nomelimpo === "sim") {
            alert("Financiamento aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}