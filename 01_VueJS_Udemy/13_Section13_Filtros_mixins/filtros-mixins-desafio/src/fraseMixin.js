export default {
  computed: {
    contarPalavrasComputed() {
      return this.frase2
        .split(' ')
        .map(p => `${p} (${p.length})`)
        .join(' ');
    },
  },
};
