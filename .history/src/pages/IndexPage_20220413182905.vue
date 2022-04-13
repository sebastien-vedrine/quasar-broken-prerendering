<template>
  <q-page class="flex flex-center">
    <span class="test">
      Test
    </span>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
  .test {
    background-color: red;
  }
</style>
