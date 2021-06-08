import Vue from 'vue';
// コンポーネントファイルがある場合
import App from './components/App.vue';

new Vue({
    el: "#app",
    render: h => h(App)
})