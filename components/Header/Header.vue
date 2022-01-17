<template>
    <div>
        <header class='header' :class="{'--blur': isHeaderBlur}">
          <NuxtLink class='header__logo-link' to='/'><img class='header__logo' src='~assets/images/logo.png' alt=''></NuxtLink>
          <div class='header__right'>
            <div class='header__right-part d-none d-md-flex'>
                <a href='https://vk.com/la_solncevo' target='_blank'>
                  <svg-icon name="vk-icon"></svg-icon>
                </a>
                <a href='https://www.instagram.com/la_solncevo/' target='_blank'>
                  <svg-icon name="instagram-icon"></svg-icon>
                </a>
                <a href='https://wa.me/79153120988' target='_blank'>
                  <svg-icon name="whatsapp-icon"></svg-icon>
                </a>
                <a class='header__tel' href='tel:+74952344584'>+7 (495) 234 45-84</a>
              </div>
            <div class='header__right-part d-none d-lg-flex'><a class='btn btn-primary btn-uppercase header__link' href='#'>Забронировать площадку </a></div>
            <div class='header__right-part'>
				<Header-menu/>
            </div>
          </div>
        </header>
    </div>
</template>

<script>
export default {
	computed: {
		isHeaderBlur() {
			return this.$route.name == 'index' ? true : false
		}
	}
}
</script>