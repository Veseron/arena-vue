<template>
    <main>
        <section class="section"> 
          <div class="container">
            <h1 class="text-uppercase">{{ pageData.title }}</h1>
            <h3 class="text-gray" v-if="checkDataExist(pageData.data)">{{ pageData.data.description }}</h3>
          </div>
        </section>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('arena', ['getElementDataBySlug']),
        pageData() {
            return this.getElementDataBySlug(this.$route.params.slug)
        }
    },
    methods: {
        checkDataExist(data) {
            return typeof data !== 'undefined' ? true : false
        } 
    }
}
</script>