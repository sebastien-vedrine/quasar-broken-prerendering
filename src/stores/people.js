import { defineStore } from 'pinia';

export const useIndexPageStore = defineStore('index-page', {
  state: () => ({
    data: 'placeholder',
    color: 'red',
  }),
  actions: {
    async fetch() {
      const { data: response } = await this.$api.get('https://swapi.dev/api/people/1');
      this.data = response.name;
      this.color = response.eye_color;
      document.dispatchEvent(new Event('render-event'));
    },
  },
});
