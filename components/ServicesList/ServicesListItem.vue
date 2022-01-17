<template>
    <div class="col-12 col-md-6 col-xl-4 mb-3 services-list__item">
        <NuxtLink :to="'/services/' + servicesItem.slug">
            <!-- <img alt="" class="img-fluid" :src="require(servicesItem.data.previewImgPath)"> -->
            <nuxt-img class="img-fluid" :src="servicesItem.data.previewImgPath"/>
            <div class="services-list__item-title h4 text-uppercase">
                {{ servicesItem.title }}
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'ServicesListItem',
    props: ['servicesItem'],
}
</script>