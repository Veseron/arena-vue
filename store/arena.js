export const state = () => ({
    sectionElements: [
        {
            id: 1,
            title: 'Большая ледовая арена',
            slug: 'big-ice-arena',
            data: {
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, neque.'
            }
        },
        {
            id: 2,
            title: 'Малая ледовая арена',
            slug: 'small-ice-arena'
        },
        {
            id: 3,
            title: 'Зал хореографии',
            slug: 'choreography-hall '
        },
        {
            id: 4,
            title: 'Универсальный спортивный зал',
            slug: 'universal-sports-hall '
        },
        {
            id: 5,
            title: 'Хоккейный зал',
            slug: 'hockey-center'
        },
        {
            id: 6,
            title: 'Игровой зал',
            slug: 'game-room'
        },
    ]
})

export const getters = {
    getElementDataBySlug: (state) => (slug) => {
        return state.sectionElements.find(el => el.slug == slug)
    }
}