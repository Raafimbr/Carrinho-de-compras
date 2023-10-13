var total = 0;
var qFone = 0;
var qCelular = 0;
var qOculus = 0;
var produto;

function adicionar() {
    // Pegar os valores nome do produto, quantidade e valor
    produto = document.getElementById('produto').value;
    produto = produto.split(' - R$');
    var valor = produto[1];
    produto = produto[0];
    let quantidade = document.getElementById('quantidade').value;
    // Verificar se a quantidade é aceita
    if (quantidade == '' || quantidade == 0) {
        apagarQuantidade();
        alert('Favor, digite uma quantidade.');
        return;
    }

    // Adiciona a quantidade dos produtos
    if (valor == 100) {
        qFone += parseInt(quantidade);
    } else if (valor == 1400) {
        qCelular += parseInt(quantidade)
    } else {
        qOculus += parseInt(quantidade)
    }

    // Adicionar o produto no carrinho
    displayCarrinho()
    
    // Atualizar o valor total da compra
    apagarQuantidade();
    total += valor * parseInt(quantidade);
    displayTotal();
    
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos'); 
    carrinho.innerHTML = '<section class="carrinho__produtos" id="lista-produtos"></section>'
    total = 0
    qFone = 0;
    qCelular = 0;
    qOculus = 0;
    displayTotal();
}

function apagarQuantidade() {
    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';
}

function displayTotal() {
    let displayTotal = document.getElementById('valor-total')
    displayTotal.innerHTML = `R$${total}`
}

function displayCarrinho() {
    let carrinho = document.getElementById('lista-produtos'); 
    carrinho.innerHTML = '<section class="carrinho__produtos" id="lista-produtos"></section>'

    if (qFone >= 1) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${parseInt(qFone)}x</span> Fone de ouvido <span class="texto-azul">R$100<br></span>
        </section>`
    } if (qCelular >= 1) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${parseInt(qCelular)}x</span> Celular <span class="texto-azul">R$1400<br></span>
        </section>`
    } if (qOculus >= 1) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${parseInt(qOculus)}x</span> Oculus VR <span class="texto-azul">R$5000<br></span>
        </section>`
    }
}
