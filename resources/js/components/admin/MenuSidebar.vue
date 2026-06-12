<template>
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'admin.dashboard' }">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'admin.category.index' }">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Categories</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "MenuSidebar",
}
</script>
