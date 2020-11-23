<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>Nome é: <strong>{{ nome }}</strong></p>
    <p>Idade é: <strong>{{ idade }}</strong></p>
    <button @click="alterarNome">Alterar nome</button>
    <hr>
    <div class="componentes">
      <app-usuario-info
        @nomeMudou="nome = $event.novo"
        :nome="nome"
        :sobrenome="sobrenome"
        :reiniciarFn="reiniciarNome"
        :idade="idade"
      />
      <app-usuario-editar :idade="idade" />
      <!-- @idadeMudou="idade = $event + 1" => +1 para provar que é o pai que
      está alterando os filhos através das propriedades. Retirado para fazer a
      comunicação através do barramento -->
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo';
import AppUsuarioEditar from './UsuarioEditar';

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: 'Pedro',
      sobrenome: 'Silva',
      idade: 21,
    };
  },
  methods: {
    alterarNome() {
      this.nome = 'Ana';
    },
    reiniciarNome() {
      this.nome = 'Marta';
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
