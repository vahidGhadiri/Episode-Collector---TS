import React from "react";
import {Store} from "./store";

import * as types from "../config/variables";
import * as urls from "../config/urls"


const setData = (data: any) => ({type: types.FETCH_DATA, payload: data})

export const fetchData = async () => {
    const {dispatch} = React.useContext(Store)
    const data = await fetch(urls.FETCH_DATA)
    const dataJSON = await data.json()
    console.log(dataJSON)
    return dispatch(setData(dataJSON._embedded.episodes))
}