export const state = () => ({
    elements: [
        {
            id: 1,
            title: 'Собянин осмотрел новый ледовый дворец в Солнцево',
            slug: 'news-1',
            data: {
                date: '21 июля 2021',
                image: '/images/news/img-1.png'
            }
        },
        {
            id: 2,
            title: 'Ледовая Арена Солнцево станет много функциональным спортивным комплексом',
            slug: 'news-2',
            data: {
                date: '21 июля 2021',
                image: '/images/news/img-2.png'
            }
        },
        {
            id: 3,
            title: 'Мы рады объявить об открытии Ледовой Арены Солнцево',
            slug: 'news-3',
            data: {
                date: '21 июля 2021',
                image: '/images/news/img-3.png'
            }
        },
        {
            id: 4,
            title: 'Собянин осмотрел новый ледовый дворец в Солнцево',
            slug: 'news-4',
            data: {
                date: '21 июля 2021',
                image: '/images/news/img-1.png'
            }
        },
    ]
})

export const getters = {
    getNewsItemBySlug(state, slug) {
        return state.elements.find(el => el.slug == slug)
    }
}