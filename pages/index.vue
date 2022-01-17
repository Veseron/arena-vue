<template>
	<main>
		<section class="container-fluid hero-section">
			<div class="container">
				<h1 class="text-white">Многофункциональный комплекс<br>
				<span class="text-uppercase">АРЕНА СОЛНЦЕВО</span></h1>
				<div class="h3 text-white">
					Текстовое описание для баннера
				</div><a class="mt-4 btn btn-primary btn-uppercase" href="#">Подробнее</a>
			</div>
		</section>
		<section class="section no-pb">
			<div class="container">
				<h2 class="h-caption mb-3">Арена Солнцево — <span class="text-secondary">точка притяжения</span> <span>всех любителей льда и спорта.</span></h2>
				<div class="row mb-3">
					<div class="col-12 col-lg-6">
						<h4 class="text-gray text-uppercase">Ледовая Арена Солнцево — это не просто несколько ледовых площадок, это — современный спортивный комплекс, включающий в себя арены и залы для комфортного и продуктивного занятия спортом.</h4>
					</div>
				</div><iframe allowfullscreen class="video-block" frameborder="0" height="565px" src="https://www.youtube.com/embed/w7KeYJkQXNA" title="YouTube video player" width="100%"></iframe>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<ServicesList :elementsList="servicesList"/>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<h2 class="mb-4 text-uppercase circle-bold">Новости</h2>
				<NewsList :elementsList="newsList"/>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<h2 class="mb-4 text-uppercase circle-bold">Контакты</h2>
				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 mb-3">
						<div class="fs-16 fw-700 mb-2">
							г. Москва, ул. Авиаторов, 7а
						</div>
						<div class="text-gray mb-4">
							Наш адрес
						</div>
						<div class="fs-16 fw-700 mb-2">
							+7 (495) 234 45-84
						</div>
						<div class="text-gray mb-4">
							Телефон для связи
						</div>
						<div class="social-links">
							<a href="https://vk.com/la_solncevo" target="_blank"><svg>
							<use xlink:href="assets/stack/sprite.svg#vk-icon"></use></svg></a> <a href="https://www.instagram.com/la_solncevo/" target="_blank"><svg>
							<use xlink:href="assets/stack/sprite.svg#instagram-icon"></use></svg></a> <a href="https://wa.me/79153120988" target="_blank"><svg>
							<use xlink:href="assets/stack/sprite.svg#whatsapp-icon"></use></svg></a>
						</div>
					</div>
					<div class="col-12 col md-6 col-lg-8 js-maps maps"></div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default ({
	name: 'IndexPage',
	head() {
		return {
			title: 'Арена Солнцево'
		}
	},
	computed: {
		servicesList() {
			return this.$store.state.services.elements
		},
		newsList() {
			return this.$store.state.news.elements
		}
	}
})
</script>
