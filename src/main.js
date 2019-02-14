import config from './loaders/load_env';
import jenkinsLoader from './loaders/jenkins_loader';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

jenkinsLoader(config);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
