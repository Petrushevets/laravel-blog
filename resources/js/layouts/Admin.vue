<template>
    <header-admin></header-admin>
    <sidebar-admin></sidebar-admin>
    <div class="content-wrapper">
        <router-view></router-view>
    </div>
    <footer-admin></footer-admin>
</template>

<script>
import HeaderAdmin from "../components/admin/Header.vue";
import FooterAdmin from "../components/admin/Footer.vue";
import SidebarAdmin from "../components/admin/Sidebar.vue";

export default {
    name: "Admin",
    components: {SidebarAdmin, FooterAdmin, HeaderAdmin}
}
</script>
