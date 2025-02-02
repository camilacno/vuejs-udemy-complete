import stocks from '../../data/stocks';

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, payload) {
      state.stocks = payload;
    },
    randomizeStocks(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      });
    },
  },
  actions: {
    buyStock({ commit }, order) {
      commit('buyStock', order);
    },
    initStocks({ commit }) {
      commit('setStocks', stocks);
      // console.log('initStocks');
    },
    randomizeStocks({ commit }) {
      commit('randomizeStocks');
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
