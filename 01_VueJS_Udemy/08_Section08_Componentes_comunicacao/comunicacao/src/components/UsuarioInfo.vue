<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <!-- <p>Sobrenome do usuário: <strong>{{ sobrenome }}</strong></p> -->

        <p>Idade do usuário: <strong>{{ idade }}</strong></p>

        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar via Props (Callback)</button>
    </div>
</template>

<script>
import barramento from '../barramento';

export default {
  props: {
    idade: Number,
    nome: {
      type: String,
      default: 'Anônimo',
      // default: function() {
      //   return Array(10)
      //     .fill(Math.random().toFixed(1))
      //     .join(',');
      // },
      // required: true,
    },
    reiniciarFn: Function,
    sobrenome: String,
  },
  methods: {
    inverterNome() {
      return this.nome
        .split('')
        .reverse()
        .join('');
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = 'Luisa';
      this.$emit('nomeMudou', {
        novo: this.nome,
        antigo,
      });
    },
  },
  created() {
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
