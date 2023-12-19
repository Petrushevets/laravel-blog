<template>
    <div class="wrapper">
        <component :is="layout">
            <slot/>
        </component>
    </div>
</template>

<script>
import Admin from "./layouts/Admin.vue";

export default {
    name: "App",
    components: {Admin},

    computed: {
        layout() {
            return this.$route.meta.layout || 'Admin';
        }
    }
}
</script>

<style scoped>

</style>
