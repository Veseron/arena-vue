<template>
    <main>
        <section class="section">
            <div class="container">
                <ServicesList :elementsList="servicesList"/>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title: 'Услуги'
        }
    },
    computed: {
		servicesList() {
			return this.$store.state.services.elements
		}
	}
}
</script>