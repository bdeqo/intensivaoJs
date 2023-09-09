// ctrl + k + c (para colocar como comentário varias linhas ao mesmo tempo)
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";


renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();