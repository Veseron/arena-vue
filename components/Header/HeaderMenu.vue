<template>
    <div v-click-outside='closeMenu'>
        <button @click="toggleMenu" class='menu-btn js-menu-trigger'>
            <svg-icon name="burger-icon"></svg-icon>
        </button>
        <nav class='sidemenu' :class="currentMenuState">
            <a class='sidemenu__close' @click="closeMenu" href='#'>
                <svg-icon name="close"></svg-icon>
            </a>
            <div class='sidemenu__list'>
                <div class='sidemenu__list-item d-none d-md-block d-lg-none'>
                    <a class='btn btn-primary btn-uppercase header__link' href='#'>Забронировать площадку </a>
                </div>
                <div class='sidemenu__list-item' v-for="el in navElements" :key="el.id">
                    <NuxtLink :to='el.route'>{{ el.title }}</NuxtLink>
                </div>
                <div class='sidemenu__list-item d-block d-md-none'>
                    <a class='btn btn-primary btn-uppercase header__link' href='#'>Забронировать площадку</a>
                </div>
                <div class='sidemenu__list-item d-flex d-md-none sidemenu__list-item--icons'>
                    <a href='https://vk.com/la_solncevo' target='_blank'>
                    <svg-icon name="vk-icon"></svg-icon>
                    </a>
                    <a href='https://www.instagram.com/la_solncevo/' target='_blank'>
                    <svg-icon name="instagram-icon"></svg-icon>
                    </a>
                    <a href='https://wa.me/79153120988' target='_blank'>
                    <svg-icon name="whatsapp-icon"></svg-icon>
                    </a>
                </div>
                <div class='sidemenu__list-item d-block d-md-none'> <a class='header__tel' href='tel:+74952344584'>+7 (495) 234 45-84</a></div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navElements: this.$store.state.menu.menuNavItems
        }
    },
    computed: {
        currentMenuState() {
            return this.$store.state.menu.isMenuOpen ? 'active' : ''
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('menu/setMenuState', !this.$store.state.menu.isMenuOpen)
        },
        closeMenu() {
            this.$store.commit('menu/setMenuState', false)
        },
    },
    watch: {
        $route() {
            this.closeMenu()
        }
    }
}
</script>