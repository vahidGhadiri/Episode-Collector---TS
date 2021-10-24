import {IAction, IState} from "../config/interfaces";
import {FETCH_DATA, REMOVE_FAV_EPISODE, SET_FAV_EPISODES} from "../config/variables";

export const initialState: IState | any = {
    episodes: [],
    favEpisodes: [],
}

export const reducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, episodes: action.payload}
        case SET_FAV_EPISODES:
            return {...state, favEpisodes: [...state.favEpisodes, action.payload]}
        case REMOVE_FAV_EPISODE:
            return {...state, favEpisodes: action.payload}
        default:
            return state
    }
}