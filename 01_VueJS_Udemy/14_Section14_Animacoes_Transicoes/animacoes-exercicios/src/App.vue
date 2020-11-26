<template>
	<div id="app" class="container-fluid">
		<!-- <h1>Animações</h1>
    <hr>
    <b-button variant="primary" class="mb-3" @click="exibir = !exibir">
      Exibir Mensagem
    </b-button> -->

    <!-- <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition> -->

    <!-- Usando a biblioteca animate.min.css referenciada no index.html -->
    <!-- <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition> -->

    <!-- <hr>
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert> -->
      <!-- key + mode -->
    <!-- </transition>
    <hr> -->

    <!-- <b-button @click="exibir2 = !exibir2">Alternar</b-button> -->
    <!-- :css="false" css não irá influenciar na transição, para que transições
    que são completamente implementadas por js não sejam influenciadas por
    classes css que estejam sendo usadas para outras animações / transições -->
    <!-- <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition> -->

    <!-- <hr>
    <div class="mb-4">
      <b-button
        class="mr-2"
        variant="primary"
        @click="componenteSelecionado = 'AlertaInfo'"
      >Info</b-button>
      <b-button
        variant="warning"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
      >Advertência</b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition> -->

    <hr>
    <b-button class="mb-4" @click="adicionarAluno">Adicionar Aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-tem @click="removerAluno(i)">{{ aluno }}</b-list-group-tem>
      </b-list-group>
    </transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia';
import AlertaInfo from './AlertaInfo';

export default {
  components: { AlertaInfo, AlertaAdvertencia },
  data() {
    return {
      msg: 'Uma mensagem de informação para o usuário!',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      componenteSelecionado: 'AlertaInfo',
      alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
    };
  },
  methods: {
    adicionarAluno() {
      const s = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 40);
    },
    beforeEnter(el) {
      // console.log('beforeEnter');
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      // this.animar(el, done, false);

      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 40);
    },
    // afterEnter(el) {
    //   console.log('afterEnter');
    // },
    // enterCancelled(el) {
    //   console.log('enterCancelled');
    // },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      // this.animar(el, done, true);

      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase - rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada == 0) {
          clearInterval(temporizador);
          done();
        }
      }, 40);
    },
    // afterLeave(el) {
    //   console.log('afterLeave');
    // },
    // leaveCancelled(el) {
    //   console.log('leaveCancelled');
    // },
  },
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
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

/* .fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
} */

/* .slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(10px);
  opacity: 0;
} */

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 1s;
}

.slide-leave-active {
  position: absolute; /* associado ao slide-move */
  width: 100%; /* associado ao slide-move */
  animation: slide-out 2s ease;
  transition: opacity 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
