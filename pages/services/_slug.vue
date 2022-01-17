<template>
    <main>
        <section class="section">
            <div class="container">
                <Breadcrumbs :start="$nuxt.$route.name"/>
                <h2>{{ pageData.title }}</h2>
            </div>
        </section>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    head() {
        return {
            title: this.pageData.title
        }
    },
    computed: {
        ...mapGetters('services', ['getElementDataBySlug']),
        pageData() {
            return this.getElementDataBySlug(this.$route.params.slug)
        }
    }
}
</script>