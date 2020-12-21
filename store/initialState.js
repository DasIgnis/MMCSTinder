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
            desctiption: 'У тебя не будет проблем с React Native, если использовать не кроссплатформенные инструменты разработке',
            prefs: [1, 4, 7, 8, 9],
            flaws: [2, 6],
            photoUrl: 'https://thispersondoesnotexist.com/image'
        },
        {
            id: 2, 
            name: 'Вася Пупкин', 
            desctiption: 'Я вообще просто заглушка',
            prefs: [2, 3, 9],
            flaws: [1, 7],
            photoUrl: 'https://thispersondoesnotexist.com/image'
        },
        {
            id: 3, 
            name: 'Илон Маск', 
            desctiption: 'Вживляю нейролинг в головы с undefined года',
            prefs: [1, 2, 3, 4, 5, 6, 7, 8],
            flaws: [],
            photoUrl: 'https://thispersondoesnotexist.com/image'
        },
    ],
    favs: [],
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
        }
    ]
};

export default initialState;