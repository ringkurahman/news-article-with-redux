import { combineReducers } from "redux"
import articleReducers from '../reducers/articleReducers'


const rootReducer = combineReducers({
  articles: articleReducers,
})


export default rootReducer