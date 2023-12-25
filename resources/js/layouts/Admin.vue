<template>
    <header-admin></header-admin>
    <div class="content-wrapper">
        <router-view></router-view>
    </div>
    <footer-admin></footer-admin>
</template>

<script>
import HeaderAdmin from "../components/admin/Header.vue";
import FooterAdmin from "../components/admin/Footer.vue";

export default {
    name: "Admin",
    components: {FooterAdmin, HeaderAdmin}
}
</script>
