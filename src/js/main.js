
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

//
import Vue from 'vue';

import helloComponent from './components/hello.vue';
Vue.component('hello-component', helloComponent);

const app = new Vue({
    el: '#app',
});
