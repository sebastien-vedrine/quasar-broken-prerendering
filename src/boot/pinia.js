import { boot } from 'quasar/wrappers';
import axios from 'axios';

export const apiKey = 'api-key';
export const emitterKey = 'mitt-key';
export default boot(({ store, app }) => {
  const api = axios.create({ /* ... */ });

  app.provide(apiKey, api);

  store.use(() => ({
    $api: api,
  }));
});
