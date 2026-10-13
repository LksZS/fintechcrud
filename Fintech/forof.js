const clientes = ["Samuel","Joana"];
for(item of clientes){
    console.log("Clientes: " + item)
}                               
clientes.push("Matheus");
console.log("Adicionando um cliente...");
for(sujeito of clientes){
    console.log("Clientes: " + sujeito)
}