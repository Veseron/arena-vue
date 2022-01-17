<template>
    <main>
        <section class="section"> 
            <div class="container">
            <h1 class="text-uppercase">Арена</h1>
            <h3 class="text-gray">Ледовая Арена Солнцево – это современный спортивный комплекс, включающий в себя арены и залы для комфортного и продуктивного занятия спортом. На территории дворца расположены:</h3>
            </div>
        </section>
        <section class="section pt-0">
            <div class="container"> 
                <div class="row serices-list services-list-empty-empty">
                    <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="el in sectionElements" :key="el.id">
                        <NuxtLink class="services-list-empty__item" :to='el.slug'>
                            <div class="services-list-empty__item-title h4 text-uppercase">{{ el.title }}</div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title: 'Арена'
        }
    },
    computed: {
        sectionElements() {
            return this.$store.state.arena.sectionElements
        }
    }
}
</script>