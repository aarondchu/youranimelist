import { UPDATE_USER } from "./actions";
import { combineReducers } from "redux";

const initialState = {
    user: {
        userName: "",
    },
}

const animeApp = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            console.log("action", action)
            return {
                ...state, user: { ...state.user, userName: action.info.userName }
            };
        default:
            return state;
    }
}

export const reducers = combineReducers({ animeApp: animeApp })