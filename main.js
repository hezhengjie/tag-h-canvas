import Vue from 'vue'
import App from './preview/preview';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
})
