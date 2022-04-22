<template>
  <q-page class="flex flex-center">
    <span :class="`bg-${color}`">
      {{ data }}
    </span>
  </q-page>
</template>

<script>
import { useIndexPageStore } from 'src/stores/people';
import { defineComponent } from 'vue';
import { preFetch } from 'quasar/wrappers';

export default defineComponent({
  name: 'IndexPage',
  preFetch: preFetch(async ({ store }) => {
    const indexPageStore = useIndexPageStore(store);
    await indexPageStore.fetch();
  }),
  setup() {
    const { data, color } = useIndexPageStore();
    return {
      data,
      color,
    };
  },
});
</script>
