import Vue from 'vue'
import App from './preview/preview'
import VueLxWatcher from '@gfe/vue-lx-watcher'

Vue.use(VueLxWatcher)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
})
