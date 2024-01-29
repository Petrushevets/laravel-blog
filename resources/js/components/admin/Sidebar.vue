<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div class="sidebar">
            <nav class="mt-2">
                <menu-sidebar></menu-sidebar>
            </nav>
        </div>
    </aside>
</template>

<script>
import MenuSidebar from "./MenuSidebar.vue";

export default {
    name: "SidebarAdmin",
    components: {MenuSidebar},
}
</script>
