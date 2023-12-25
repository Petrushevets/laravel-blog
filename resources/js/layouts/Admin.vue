<template>
    <header-admin></header-admin>
    <div class="content-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderAdmin from "../components/admin/Header.vue";

export default {
    name: "Admin",
    components: {HeaderAdmin}
}
</script>
