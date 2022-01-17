<template>
    <footer class="footer"> 
      <div class="container">
        <div class="footer__top">
          <NuxtLink v-for="el in navElements" :key="el.id" class="footer__link" :to="el.route">{{ el.title }}</NuxtLink>
          <a class="footer__to-top" @click="scrollToTop" href="#"> 
            <svg-icon name="arrow-top"></svg-icon>
          </a>
        </div>
        <div class="footer__bottom"> 
          <div class="footer__bottom-text">© 2021 Ледовая арена Солнцево - Все права защищены.</div>
          <div class="footer__bottom-text">Политика конфиденциальности</div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  data() {
		return {
			navElements: this.$store.state.menu.menuNavItems
		}
	},
	methods: {
		scrollToTop(e) {
			e.preventDefault()
			window.scrollTo({top: 0, behavior: 'smooth'})
		}
	}
}
</script>
