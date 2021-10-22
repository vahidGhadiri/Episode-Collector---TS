import React, {useContext, useEffect} from "react"
import ReactDOM from "react-dom"
import axios from "axios";
import {Store, StoreProvider} from "./context/store"

import * as urls from "./config/urls";
import {setData} from "./context/actions";

import "./App.scss"


export const App: React.FC = () => {
    const {state, dispatch} = useContext(Store)

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            axios.get<any>(urls.FETCH_DATA)
                .then(response => dispatch(setData(response.data._embedded.episodes)))
                .catch(error => reject(error))
        })
    }

    useEffect(() => {
        !state.episodes.length && fetchData()
    }, [])


    return (
        <div onClick={() => console.log(state)}>
            <h1>Rick & Morty</h1>
            <p>Pick your favourite episode</p>
        </div>
    )
}

ReactDOM.render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById('root'))


export const fetchData = async () => {
    // const {dispatch} = React.useContext(Store)
    const data = await fetch(urls.FETCH_DATA)
    const dataJSON = await data.json()
    console.log(dataJSON)
}