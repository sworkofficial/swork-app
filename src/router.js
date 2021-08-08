import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/swork-page1/",
	},
	{
		path: "/swork-page1",
		name: "swork-page1",
		component: () =>
			import(/* webpackChunkName: "home" */ "./views/swork-page1.vue"),
	},
	{
		path: "/swork-page2",
		name: "swork-page2",
		component: () =>
			import(/* webpackChunkName: "home" */ "./views/swork-page2.vue"),
	},
];

export default routes;
