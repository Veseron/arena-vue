<template>
    <div class="row serices-list">
        <ServicesListItem v-for="el in elementsList" :key="el.id" :servicesItem="el"/>
    </div>
</template>

<script>
export default {
    name: 'ServicesList',
    props: ['elementsList'],
}
</script>