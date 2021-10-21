import {IAction, IState} from "../config/interfaces";
import {FETCH_DATA} from "../config/variables";

export const initialState: IState | any = {
    episodes: [],
    favourites: []
}

export const reducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, episodes: action.payload}
        default:
            return state
    }
}