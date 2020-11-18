new Vue({
  el: '#desafio',
  data: {
    valor: '',
  },
  methods: {
    exibirAlerta() {
      alert('Olá mundo pra ver se dá sorte');
    },
    mudarValor(e) {
      this.valor = e.target.value;
    },
  },
});
