import { combineReducers } from "redux";
import Auth from './Reducer/Auth'
import Location from './Reducer/Location'

const store = combineReducers({
    Auth,
    Location
})

export default store