export const state = () => ({
    isMenuOpen: false,
    menuNavItems: [
        {
            id: 1,
            title: 'Арена',
            route: '/arena/'
        },
        {
            id: 2,
            title: 'Школа',
            route: '/school/'
        },
        {
            id: 3,
            title: 'Услуги',
            route: '/services/'
        },
        {
            id: 4,
            title: 'Новости',
            route: '/news/'
        },
        {
            id: 5,
            title: 'Контакты',
            route: '/contacts/'
        },
    ]
})

export const mutations = {
    setMenuState(state, value) {
        state.isMenuOpen = value
    } 
}