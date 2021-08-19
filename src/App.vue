<template>
    <div id="app" v-if="MICRO_APP_ENVIRONMENT">
        <router-view/>
    </div>
    <div v-else>
        The swork-app runs successfully. Please check the running status in swork.😀
    </div>
</template>

<script>

export default {
    name: "App",
    data() {
        return {
            MICRO_APP_ENVIRONMENT: false
        }
    },
    mounted() {
        this.MICRO_APP_ENVIRONMENT = window.__MICRO_APP_ENVIRONMENT__
        if (!this.MICRO_APP_ENVIRONMENT) {
            console.log('Not in MICRO_APP_ENVIRONMENT')
        } else {
            this.MICRO_APP_ENVIRONMENT = true
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
