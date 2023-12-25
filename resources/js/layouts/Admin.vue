<template>
    <header-admin></header-admin>
    <sidebar-admin></sidebar-admin>
    <div class="content-wrapper">
        <breadcrumbs-admin></breadcrumbs-admin>
        <router-view></router-view>
    </div>
    <footer-admin></footer-admin>
</template>

<script>
import HeaderAdmin from "../components/admin/Header.vue";
import FooterAdmin from "../components/admin/Footer.vue";
import SidebarAdmin from "../components/admin/Sidebar.vue";
import BreadcrumbsAdmin from "../components/admin/Breadcrumbs.vue";

export default {
    name: "Admin",
    components: {BreadcrumbsAdmin, SidebarAdmin, FooterAdmin, HeaderAdmin}
}
</script>
