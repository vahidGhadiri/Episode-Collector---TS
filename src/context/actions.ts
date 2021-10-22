import * as types from "../config/variables";


export const setData = (data: Array<any>) => ({type: types.FETCH_DATA, payload: data})

