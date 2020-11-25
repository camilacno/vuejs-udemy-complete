<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpfBase | cpf | inverter }}</p>
    <input type="text" :value="cpfBase | cpf | inverter" >
    <!-- V-model não é suportado com filtros -->
    <hr>
    <Frutas />
    <hr>
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
	</div>
</template>

<script>
import Frutas from './Frutas';
import FrutasMixin from './FrutasMixin';

export default {
  components: { Frutas },
  mixins: [FrutasMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');
      return arr.join('');
    },
  },
  data() {
    return {
      cpfBase: '85227342400',
      frutas: ['abacate', 'melão'],
      // O que está dentro do componente tem prioridade sobre o mixin
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

ul {
  list-style: none;
}
</style>
