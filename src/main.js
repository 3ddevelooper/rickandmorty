import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomeComp from './components/HomeComp.vue';
import LugaresComp from './components/LugaresComp.vue';
import PersonajesComp from './components/PersonajesComp.vue';
import CapitulosComp from './components/CapitulosComp.vue';
import ErrorComp from './components/ErrorComp.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/lugares', name: 'Lugares', component: LugaresComp },
    { path: '/personajes', name: 'Personajes', component: PersonajesComp },
    { path: '/capitulos', name: 'Capitulos', component: CapitulosComp },
    { path: '/home', name: 'Home', component: HomeComp },
    { path: '*', name: 'Error', component: ErrorComp }
];
const router = new VueRouter({ routes, /*mode: 'history'*/ });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')