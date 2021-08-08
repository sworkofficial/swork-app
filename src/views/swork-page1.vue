<template>
	<div>
		<h1>Swork App 第一页</h1>
		<!--<p>数据传输：{{ microDataStr }}</p>-->
		<Button class="mb-2" @click="handleSendData" type="primary">向主应用发送数据{{ count }}</Button>
	</div>
</template>

<script>
import Vue from 'vue'
export default {
	name: "micro-page1",
	data() {
		return {
			centerDialogVisible: false,
			microDataStr: "",
			count: 1,
		};
	},
	mounted() {
		console.log(window.microApp.getData());
	},
	created() {
		window.microApp &&
			window.microApp.addDataListener(this.handleDataChange, true);
	},
	beforeDestroy() {
		window.microApp &&
			window.microApp.removeDataListener(this.handleDataChange);
	},
	methods: {
		// 接收来自基座的数据
		handleDataChange(data) {
			console.log("vue2 来自基座应用的数据", data);
            // console.log(data.$api.default.login())
			// this.centerDialogVisible = true;
			// this.microDataStr = data;
            console.log(this.$api)
		},

		// 向基座应用发送数据
		handleSendData() {
			this.count += 1;
			window.microApp?.dispatch({ count: this.count });
		},
	},
};
</script>

<style lang="scss" scoped></style>
