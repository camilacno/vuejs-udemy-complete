<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Produtos: <strong>{{ totalProdutos }}</strong></span>
            <br>
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  //carrinho -> namespaced
  computed: mapGetters('carrinho', {
    total: 'valorTotal',
    totalProdutos: 'totalProdutos',
  }),
  // computed: mapGetters(['valorTotal', 'totalProdutos']),
  // computed: {
  //   total() {
  //     return this.$store.getters.valorTotal;
  //   },
  //   totalProdutos() {
  //     return this.$store.getters.totalProdutos;
  //   },
  // },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
