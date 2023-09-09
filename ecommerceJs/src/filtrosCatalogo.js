const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {
    const produtosEscondidos =
        Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for (const produtos of produtosEscondidos) {
        produtos.classList.remove('hidden');
    }
}

function esconderMasculinos() {
    exibirTodos();
    const produtosMasculinos =
        Array.from(catalogoProdutos.getElementsByClassName('masculino'));
    
    for (const produtos of produtosMasculinos) {
        produtos.classList.add('hidden');
    }
}

function esconderFemininos() {
    exibirTodos();
    const produtosFemininos =
        Array.from(catalogoProdutos.getElementsByClassName('feminino'));
    
    for (const produtos of produtosFemininos) {
        produtos.classList.add('hidden');
    }
}

export function inicializarFiltros() {
    document
        .getElementById('exibir-todos')
        .addEventListener('click', exibirTodos);
    document
        .getElementById('exibir-femininos')
        .addEventListener('click', esconderMasculinos);
    document
        .getElementById('exibir-masculinos')
        .addEventListener('click', esconderFemininos);
}

