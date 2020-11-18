new Vue({
  el: '#desafio',
  data: {
    nome: 'Camila Nepomuceno',
    idade: 39,
    srcImg:
      'https://blogexamedeordem.com.br/uploads/2017/11/proibido-perder-o-foco.png',
  },
  methods: {
    idadex3() {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    },
  },
});
