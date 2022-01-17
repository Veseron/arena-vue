<template>
    <div>
        <swiper :options="swiperOptions" class="services-list">
            <swiper-slide v-for="el in elementsList" :key="el.id">
                <NewsListItem :newsItem="el"/>
            </swiper-slide>
        </swiper>
        <div class="slick-arrows-block">
            <div 
                class="slick-arrow arrow-prev js-news-arrow-prev swiper-button-prev"
                slot="button-prev"
            >
                <svg-icon name="arrow"/>
            </div>
            <div 
                class="slick-arrow arrow-next js-news-arrow-next swiper-button-next"
                slot="button-next"
            >
                <svg-icon name="arrow"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsList',
    props: ['elementsList'],
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    }
                }
            }
        }
    },
    computed: {
        showArrows() {
            this.elementsList.length > 3 ? true : false
        },
    },
}
</script>