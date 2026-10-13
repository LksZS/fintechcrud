const fila = ["Luiz", "Ana", "Roberta"];

console.log('Fila atual: ' + fila)

function atendeCliente(cliente) {
    console.log('Atendendo o cliente: ' + cliente);
    fila.shift();
}

function exibirFila() {
    if (fila.length == 0) {
        console.log('Fila vazia!');
    } else {
        console.log('Fila atual: ' + fila);
    }
}


while (fila.length > 0) {
    atendeCliente(fila[0]);
    exibirFila()
}

console.log('Fim da Fila');
