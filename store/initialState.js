const initialState = {
    profile: {
        name: '',
        desctiption: '',
        prefs: [],
        flaws: [],
        vkUid: '',
        tgUid: '',
        imgURI: ''
    },
    users: [
        {
            id: 1, 
            name: 'Задверняк Яна', 
            description: 'У тебя не будет проблем с React Native, если использовать не кроссплатформенные инструменты разработки',
            prefs: [1, 4, 7, 8, 9],
            flaws: [2, 6],
            photoUrl: 'https://thispersondoesnotexist.com/image',
            vkUid: 'dasignis',
            tgUid: 'dasignis'
        },
        {
            id: 2, 
            name: 'Вася Пупкин', 
            description: 'Я вообще просто заглушка',
            prefs: [2, 3, 9],
            flaws: [1, 7],
            photoUrl: 'https://thispersondoesnotexist.com/image'
        },
        {
            id: 3, 
            name: 'Илон Маск', 
            description: 'Вживляю нейролинк в головы с undefined года',
            prefs: [1, 2, 3, 4, 5, 6, 7, 8],
            flaws: [10],
            photoUrl: 'https://thispersondoesnotexist.com/image'
        },
    ],
    favs: [1, 3],
    technologies: [
        {
            id: 1,
            item: 'Веб-разработка'
        },
        {
            id: 2,
            item: 'Машинное обучение'
        },
        {
            id: 3,
            item: 'Компьютерное зрение'
        },
        {
            id: 4,
            item: 'Геймдизайн'
        },
        {
            id: 5,
            item: 'Компиляторы'
        },
        {
            id: 6,
            item: 'Unity'
        },
        {
            id: 7,
            item: 'C#'
        },
        {
            id: 8,
            item: 'Английский язык'
        },
        {
            id: 9,
            item: 'Проектная деятельность'
        },
        {
            id: 10,
            item: 'Русский язык'
        }
    ]
};

export default initialState;