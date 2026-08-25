const fila = ["Luiz", "Ana", "Roberta"];
let i = 0;

console.log("Fila de clientes: " + fila);

do {
    i += 1;
    console.log(`Atendendo o ${i}º cliente...`);

    let nome = fila.shift();

    console.log("Cliente atendido: " + nome);
    console.log("Fila de clientes: " + fila);
} while (fila.length > 0);

console.log("Não restaram nenhum cliente.");
