<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="somar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    somar() {
      return this.contador++;
    },
    subtrair() {
      return this.contador--;
    },
  },
};
</script>

<style scoped>
span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}
button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
