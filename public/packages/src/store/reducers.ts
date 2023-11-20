import { combineReducers } from "redux";

//api
import { blogApi } from './post/api'

export const reducers = {
    [blogApi.reducerPath]: blogApi.reducer,
}

export const rootReducer = combineReducers({
     ...reducers });
type ReducersState = ReturnType<typeof rootReducer>;


