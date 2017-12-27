import axios from 'axios';
var HOST = 'http://localhost:81';

var axiosInstance = axios.create({
    baseURL: `${HOST}/api`,
    headers: {}
});

// News Page
export const fetchEntries = () => {
    return {
        data: [
            {
                title: 'Уверенная победа',
                data: '11 дек в 11:28',
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