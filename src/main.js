import Vue, {createApp} from 'vue'
import App from './App.vue'
import { ApmVuePlugin } from '@elastic/apm-rum-vue'

Vue.config.productionTip = false

let options = {
    config: {
    serverUrl: 'https://ucn-rum-apm.norriq.dev:443',
    serviceName: 'WebApp'
    }
};
Vue.use(ApmVuePlugin, options);

let app = new Vue({
  render: h => h(App),
}).$mount('#app');

