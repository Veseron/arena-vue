export const state = () => ({
    elements: [
        {
            id: 1,
            title: 'Две ледовые арены (большая и малая)',
            slug: 'ice-arenas',
            data: {
                previewImgPath: '/images/services-list/main/img-1.png' 
            },
        },
        {
            id: 2,
            title: 'Универсальный спортивный зал',
            slug: 'sport-hall',
            data: {
                previewImgPath: '/images/services-list/main/img-2.png' 
            }
        },
        {
            id: 3,
            title: 'Аренда залов и ледовых площадок',
            slug: 'rent-of-ice-hall',
            data: {
                previewImgPath: '/images/default-img.png' 
            }
        },
        {
            id: 4,
            title: 'Хоккейная школа',
            slug: 'hockey-school',
            data: {
                previewImgPath: '/images/services-list/main/img-4.png' 
            }
        },
        {
            id: 5,
            title: 'Школа фигурного катания',
            slug: 'figure-skating-school ',
            data: {
                previewImgPath: '/images/default-img.png' 
            }
        },
        {
            id: 6,
            title: 'Зал хореографии',
            slug: 'choreography-hall',
            data: {
                previewImgPath: '/images/services-list/main/img-6.png' 
            }
        },
        {
            id: 7,
            title: 'Кросс-фит зона',
            slug: 'cross-fit-zone',
            data: {
                previewImgPath: '/images/services-list/main/img-7.png' 
            }
        },
        {
            id: 8,
            title: 'Магазины со спортинвентарем',
            slug: 'sport-market',
            data: {
                previewImgPath: '/images/services-list/main/img-8.png' 
            }
        },
        {
            id: 9,
            title: 'Ателье по уходу за формой и коньками',
            slug: 'shape-care-atelier',
            data: {
                previewImgPath: '/images/services-list/main/img-9.png' 
            }
        },
        {
            id: 10,
            title: 'Просторные и современные раздевалки с выходом на ледовые поля',
            slug: 'changing-rooms',
            data: {
                previewImgPath: '/images/services-list/main/img-10.png' 
            }
        },
        {
            id: 11,
            title: 'Зона отдыха, кафе и ресторан',
            slug: 'recreation-area',
            data: {
                previewImgPath: '/images/default-img.png' 
            }
        },
    ]
})

export const getters = {
    getServicesList: (state) => {
        return state
    },
    getElementDataBySlug: (state) => (slug) => {
        return state.elements.find(el => el.slug == slug)
    }
}