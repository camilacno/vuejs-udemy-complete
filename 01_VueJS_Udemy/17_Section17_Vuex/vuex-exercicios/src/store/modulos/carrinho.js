export default {
  namespaced: true,
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
    totalProdutos(state) {
      return state.produtos
        .map(p => Number(p.quantidade))
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    },
  },
  actions: {
    // adicionarProduto(context, payload) {
    adicionarProduto({ commit }, payload) {
      setTimeout(() => {
        // context.commit('adicionarProduto', payload);
        commit('adicionarProduto', payload);
      }, 1000);

      // deixar a action no root:
      // adicionarProduto1: {
      //   root: true,
      //   handler({ commit }, payload) {
      //     setTimeout(() => {
      //       commit('adicionarProduto', payload);
      //     }, 1000);
      //   }
      // }
    },
  },
};
