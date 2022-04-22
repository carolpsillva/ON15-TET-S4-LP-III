let clienteLilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }]

let clienteJulia = [
    { produto: 'Calca jeans skinny', valor: 90.0 },
    { produto: 'Blusa T-shirt friends', valor: 50.0 },
    { produto: 'Bota preta tamanho 37', valor: 150.0 },
    { produto: 'Saia midi tamanho m', valor: 60.0 },
    { produto: 'Bolsa carteira preta', valor: 50.0 }]

let clienteGabrielly = [
    { produto: 'Conjunto de moletom rosa', valor: 170.0 },
    { produto: 'Sapatilha preta tamanho 39', valor: 50.0 },
    { produto: 'Cinto branco com detalhes dourados', valor: 20.0 },
    { produto: 'Carteira simples marrom', valor: 25.0 },
    { produto: 'Blusa T-shirt branca', valor: 40.0 },
    { produto: 'Saia plissada midi preta', valor: 40.0 },
    { produto: 'Pijama de inverno plush', valor: 70.0 },
    { produto: 'Conjunto meia plush tamanho unico', valor: 20.0 },
    { produto: 'Blusa manga longa azul marinho', valor: 30.0 },
    { produto: 'Calça legging preta', valor: 40.0 }]

let valorTotal = []
let descontoAplicado = []


function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoAplicado.push(valor * 0.5)
    } else if (valor >= 100.0) {
        descontoAplicado.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoAplicado.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoAplicado.push(valor * 0.5)
    }
}

 function finalizarCompra(comprasDaCliente) {

 let quantidadeDeProdutos = comprasDaCliente.length

     comprasDaCliente.forEach(item => {
     valorTotal.push(item.valor)
     calcularDesconto(item.valor)
 })

valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
let valorFinal = valorTotal - descontoAplicado
let dataDaCompra = new Date()

let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
})
}

if (quantidadeDeProdutos > 10 || valorFinal > 800.0) {
    return console.table({
        ...notaFiscal,
        "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
})
    } else {
        return console.table(notaFiscal)
    }
}

finalizarCompra(clienteLilit)
finalizarCompra(clienteJulia)
finalizarCompra(clienteGabrielly)