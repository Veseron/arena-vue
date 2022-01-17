<template>
    <div class="level">
        <div class="level-left">
        <div class="level-item">
            <a class="button is-white" @click="$router.back()">
            <b-icon icon="chevron-left" size="is-medium" />
            </a>
        </div>
        <div class="level-item">
            <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
                    <nuxt-link :to="item.path">
                        {{ item.name }}
                    </nuxt-link>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['start'],
    computed: {
        crumbs() {
        const fullPath = this.$route.fullPath
        const params = fullPath.substring(1).split('/')
        const crumbs = []

        let path = ''

        params.forEach((param, index) => {
            path = `${path}/${param}`
            const match = this.$router.match(path)

            if (match.name !== null) {
            crumbs.push(match)
            }
        })

        return crumbs
        },
    },
}
</script>