<template>
    <div class="tw-p-4">
        <div>The swork-app runs successfully ! 😀</div>
        <div>Getting more help from <a href="http://devdoc.growingsale.cn/" target="_blank">http://devdoc.growingsale.cn</a></div>
    </div>
</template>

<script>

export default {
    name: "swork-home",
    data() {
        return {};
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
        handleDataChange(data) {
            this.$forceUpdate()
        },
    },
};
</script>

<style>
</style>