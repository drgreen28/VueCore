import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import LogViewer from '../LogViewer/LogViewer';
import DbSelector from '../DbSelector/DbSelector';
Vue.use(BootstrapVue);
const routes = [
    { path: '/', redirect: '/LogViewer' },
    { path: '/LogViewer', component: LogViewer, },
];
const router = new VueRouter({
    routes
});
Vue.use(VueRouter);
new Vue({
    el: '#components',
    router,
    data: {
        sidebarShow: false
    },
    components: {
        'db-selector': DbSelector
    }
});
//# sourceMappingURL=index.js.map