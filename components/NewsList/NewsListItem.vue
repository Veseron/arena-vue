<template>
    <div class="services-list__item">
        <nuxt-link :to="'/news/' + newsItem.slug">
            <nuxt-img class="img-fluid" :src="newsItem.data.image"/>
        </nuxt-link>
        <div class="services-list__item-footer mt-3">
            <div class="caption text-gray mb-1">
                {{ newsItem.data.date }}
            </div>
            <nuxt-link :to="'/news/' + newsItem.slug" class="services-list__item-link">
                {{ newsItem.title }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newsListItem',
    props: ['newsItem']
}
</script>