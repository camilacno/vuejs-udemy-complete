import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('destaque', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'lightgreen';
    const aplicarCor = cor => {
      if (binding.arg === 'fundo') {
        el.style.backgroundColor = cor;
      } else {
        el.style.color = cor;
      }
    };

    let atraso = 0;
    if (binding.modifiers['atrasar']) atraso = binding.value.atraso;

    const cor1 = binding.value.cor1;
    const cor2 = binding.value.cor2;
    let corAtual = cor1;

    setTimeout(() => {
      if (binding.modifiers['alternar']) {
        setInterval(() => {
          corAtual = corAtual === cor1 ? cor2 : cor1;
          aplicarCor(corAtual);
        }, binding.value.intervalo);
      } else {
        aplicarCor(binding.value.cor1);
      }
    }, atraso);
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
