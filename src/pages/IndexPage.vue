<template>
  <q-page class="flex flex-center">
    <span :class="`bg-${color}`">
      {{ data }}
    </span>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  data() {
    return {
      data: 'placeholder',
      color: 'red',
    };
  },

  async mounted() {
    const response = (await this.$axios.get('https://swapi.dev/api/people/1')).data;
    setTimeout(() => {
      this.data = response.name;
      this.color = response.eye_color;
      document.dispatchEvent(new Event('render-event'));
    }, 2000);
  },
});
</script>

<style lang="scss" scoped>
  .test {
    background-color: red;
  }
</style>
