import axios from 'axios';

var HOST = 'http://localhost:81';

var axiosInstance = axios.create({
    baseURL: `${HOST}/api`,
    headers: {}
});

// Common
export const fetchCommonScoresTable = () => {
    return {
        data: [
            {
                name: 'Армата',
                games: 5,
                scores: 15
            },
            {
                name: 'СТЕЛА',
                games: 5,
                scores: 12
            },
            {
                name: 'Energy',
                games: 5,
                scores: 12
            },
            {
                name: 'Виктория',
                games: 5,
                scores: 12
            },
            {
                name: 'Орион',
                games: 6,
                scores: 10
            },
            {
                name: 'Наутилус',
                games: 5,
                scores: 9
            },
            {
                name: 'Атлант 5х5',
                games: 4,
                scores: 7
            },
            {
                name: 'Лидер',
                games: 6,
                scores: 4
            },
            {
                name: 'Южтехмонтаж',
                games: 5,
                scores: 2
            },
            {
                name: 'ЛФ КБР',
                games: 5,
                scores: 1
            },
            {
                name: 'Ля-Мажор',
                games: 2,
                scores: 0
            },
            {
                name: 'Армейцы дона',
                games: 5,
                scores: 0
            }
        ]
    }
    // return axiosInstance.get('common/getScoresTable');
};

// News Page
export const fetchEntries = () => {
    return {
        data: [
            {
                title: 'Уверенная победа #1',
                date: '11 дек в 11:28',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            },
            {
                title: 'Уверенная победа #2',
                date: '11 дек в 11:29',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            },
            {
                title: 'Уверенная победа #3',
                date: '11 дек в 11:30',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            }
        ]
    }
    // return axiosInstance.get('news/getEntries');
};

//Events Short
export const fetchEventsShort = () => {
    return {
        data: [
            {
                date: "24.12",
                time: "17:05",
                home: "Наутилус",
                away: "Ля Мажор",
                score: "5:1"
            },
            {
                date: "17.12",
                time: "15:20",
                home: "Enerdgy",
                away: "Наутилус",
                score: "10:6"
            }
        ]
    }
    // return axiosInstance.get('news/getEventsShort');
};