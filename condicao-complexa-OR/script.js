let idade = Number(prompt("Insira sua idade:"));
let estudante = prompt("É estudante?");
let professor = prompt("É professor?");

if (idade >= 60 || estudante === "sim" || professor === "sim") {
    alert("Tem direito a desconto");
}   else {
    alert("Não tem desconto");
}  