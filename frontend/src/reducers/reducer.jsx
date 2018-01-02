import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import playersReducer from './playersReducer'
import photoReducer from './photoReducer'
import scoresTableReducer from './scoresTableReducer'
import eventsShortReducer from './eventsShortReducer'
import vkReducer from './vkReducer'

export default combineReducers({
    newsPage: newsReducer,
    playersPage: playersReducer,
    photoPage: photoReducer,
    scoresTable: scoresTableReducer,
    eventsShort: eventsShortReducer,
    vk: vkReducer
});