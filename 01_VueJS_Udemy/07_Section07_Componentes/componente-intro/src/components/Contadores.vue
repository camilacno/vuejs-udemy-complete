<template>
  <div class="contadores">
    <app-contador v-for="i in 5" :key="i" />
  </div>
</template>

<script>
import Contador from '../components/Contador';

export default {
  components: {
    'app-contador': Contador,
  },
};
</script>

<style></style>
