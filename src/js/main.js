
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

//
import Vue from 'vue';

import helloComponent from './components/hello.vue';
Vue.component('hello-component', helloComponent);

let im_cool = () => 'this is good';

console.log(im_cool())


const app = new Vue({
    el: '#app',
});