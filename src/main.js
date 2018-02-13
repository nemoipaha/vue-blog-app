import Vue from 'vue'
import App from './App.vue'

Vue.filter('capitalize', function (value) {
    value = value.toString();

    return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
