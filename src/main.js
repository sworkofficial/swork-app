import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

function getBaseName() {
    // 基座是history路由，子应用是hash路由，不需要设置路由前缀
    return "/";
}

const router = new VueRouter({
    options: {
        base: getBaseName(),
    },
    routes,
});


let app = new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");

// 监听卸载
window.addEventListener("unmount", function () {
    console.log("微应用micro-app卸载了");
    // 卸载应用
    app.$destroy();
});

window.microApp &&
window.microApp.addDataListener((data) => {
    Vue.use(data.ViewUI)
    Vue.prototype.$api = data.$api.default
    Vue.prototype.$store = data.$store
}, true);

console.timeEnd("micro-app");