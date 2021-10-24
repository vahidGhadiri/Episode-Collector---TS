import * as types from "../config/variables";
import {IAction} from "../config/interfaces";


export const setData = (data: Array<any>): IAction => ({type: types.FETCH_DATA, payload: data})

export const setFavEpisodes = (data: object): IAction => ({type: types.SET_FAV_EPISODES, payload: data})

export const removeFavEpisode = (data: object): IAction => ({type: types.REMOVE_FAV_EPISODE, payload: data})

