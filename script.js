const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {

    for(let i = 0 ; i < barbearia.cortes.length; i++){
        if (barbearia.cortes[i].id === id){
            return barbearia.cortes[i]
        }
    }
        return 'Corte não Encontrado' ;
}

function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++){
        if ( barbearia.barbas[i].id === id){
            return barbearia.barbas[i]
        }
    }
    return 'Barba não encontrada';
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return 'Estamos abertos'
    }
    return 'Estamos fechados'
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: (typeof corte === 'object' && corte !== null) ? corte.tipo : 'Corte não encontrado',
        pedidoCortePreco: (typeof corte === 'object' && corte !== null) ? corte.valor : 0,
        pedidoBarba: (typeof barba === 'object' && barba !== null) ? barba.tipo : 'Barba não encontrada',
        pedidoBarbaPreco: (typeof barba === 'object' && barba !== null) ? barba.valor : 0
    };

    return pedido;
}


function atualizarServico(lista, id, nValor, nTipo) {
    const index = lista.findIndex(item => item.id === id);

    if(index !== -1){
        lista[index].tipo = nTipo
        lista[index].valor = nValor
    }
    return lista;
}

function calculaTotal(pedido) {
    const precoCorte = pedido.pedidoCortePreco;
    const precoBarba = pedido.pedidoBarbaPreco;

    const total = precoBarba + precoCorte;
    return total
}
  
  
